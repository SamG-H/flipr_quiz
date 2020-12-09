import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsActions'
import Question from './Question'
import Score from './Score'

class QuizForm extends Component {
  
  constructor() {
    super()
    this.state = {
      submitted: false,
      score: 0,
      answers: {}
    }
  }

  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id)
  }

  handleChange = e => {
    const {name, value} = e.target
    let answers = {...this.state.answers}
    answers[name] = {
      content: value,
      isCorrect: false
    }
    this.setState({
      answers})
  }

  handleSubmit = e => {
    e.preventDefault()
    const score = this.correctQuiz()
    this.setState({
      score: score,
      submitted: true
    })
  }

  correctQuiz = () => {
    let score = 0
    let answers = {...this.state.answers}
    this.props.cards.data.forEach( card => {
      for (const id in this.state.answers) {
        if(this.state.answers[id].content.toLowerCase() === card.attributes.back.toLowerCase()
           && id === card.id){ 
          score += 1
          answers[id] = {
            ...this.state.answers[id],
            isCorrect: true
          }
        }
      }
    })

    this.setState({
      answers
    })
    return score;
  }

  handleClick = () => {
    this.setState({
      score: 0,
      submitted: false,
      answers: []
    })
  }

  render() {
    console.log('cards: ', this.props.card)
     if(this.props.cards.length === 0) {
      return null
    }
      return (
      <div className='has-text-centered'>
        <h1 className='is-size-2 has-text-link'>{this.props.cards.included[0].attributes.title} Quiz</h1>
        {this.state.submitted && <Score score={this.state.score} possible={this.props.cards.data.length} handleClick={this.handleClick} /> }

        <form onSubmit={this.handleSubmit}>
        {this.props.cards.data.map( card => {
            return (
            <div key={card.id}>
              <Question
              front={card.attributes.front} 
              back={card.attributes.back} 
              id={card.id} 
              isSubmitted={this.state.submitted} 
              isCorrect={this.state.submitted && this.state.answers[card.id].isCorrect}
              value={(Object.keys(this.state.answers).length === 0) || !(card.id in this.state.answers) ?  '' : this.state.answers[card.id].content }
              handleChange={this.handleChange}/>
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
    cards: state.cards,
    stacks: state.stacks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: (id) => dispatch(fetchCards(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (QuizForm)
