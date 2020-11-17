import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsActions'
import Question from './Question'
import Score from './Score'

class QuizForm extends Component {

  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id)
  }

  state = {
    submitted: false,
    score: 0,
    answers: {}
  }

  handleChange = e => {
    const {name, value} = e.target
    let answers = {...this.state.answers}
    answers[name] = {
      content: value,
      isCorrect: false
    }
    this.setState({
      score: 0,
      submitted: false,
      answers})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted: true})
    const score = this.correctQuiz()
    this.setState({score: score})
  }

  correctQuiz = () => {
    let score = 0
    for (const id in this.state.answers) {
      this.props.cards.data.forEach( card => {
        if(this.state.answers[id].content.toLowerCase() === card.attributes.back.toLowerCase()){ 
          score += 1
          let answers = {...this.state.answers}
          console.log('copy: ', answers)
          console.log('state: ', this.state.answers)
          // debugger
          answers[id] = {
            content: this.state.answers[id].content,
            isCorrect: true
          }
          console.log('copy_after_change: ', answers)
          this.setState({
            answers
          }, console.log('state_after_setState: ', this.state.answers))
          debugger
        }
      })
    }
    return score;
  }

  configureColor = () => {
    
  }

  render() {
    if(this.props.cards.length === 0) {
      return null
    }

      return (
      <div className='has-text-centered'>
        <h1 className='is-size-2'>{this.props.cards.included[0].attributes.title} Quiz</h1>
        {this.state.submitted && <Score score={this.state.score} possible={this.props.cards.data.length}/> }
        <form onSubmit={this.handleSubmit}>
        {this.props.cards.data.map( card => {
            return (
            <div key={card.id}>
              <Question front={card.attributes.front} back={card.attributes.back} id={card.id} isSubmitted={this.state.submitted} isCorrect={this.state.submitted && this.state.answers[card.id].isCorrect} handleChange={this.handleChange}/>
            </div>
          )
        })}
        <br />
        <input type='submit' value='Submit Quiz' className='button is-primary' />
        </form>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: (id) => dispatch(fetchCards(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (QuizForm)
