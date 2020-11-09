import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Score from './Score'

class Quiz extends Component {

  componentDidMount() {
    //this.props.resetStackId()
  }

  state = {
    submitted: false,
    score: 0,
    answers: {}
  }

  handleChange = e => {
    const {name, value} = e.target
    //const answers = this.state.answers
    let answers = {...this.state.answers}
    answers[name] = {
      content: value,
      isCorrect: false
    }
    this.setState({answers})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted: true})
    const score = this.correctQuiz()
    console.log(this.correctQuiz())
    this.setState({score: score})
  }

  correctQuiz = () => {
    console.log('state', this.state)
    let score = 0
    for (const property in this.state.answers) {
      console.log('property:', property)
      this.props.stacks.included.forEach( card => {
        if (card.id === property){
          //if(this.state.answers[property].toLowerCase() === card.attributes.back.toLowerCase()){ 
          //  score += 1
            
          //}
        }
      })
    }
    return score;
  }

  render() {
      return (
      <div  className='has-text-centered'>
        <h2 className='is-size-2'>{this.props.title}</h2>
        {this.state.submitted ? < Score score={this.state.score} possible={document.querySelectorAll('input').length - 1}/> : null }
        <form onSubmit={this.handleSubmit}>
        {this.props.stacks.included.map( card => {
          if (card.relationships.stack.data.id === this.props.id){
            return (
            <div key={card.id}>
              < Question front={card.attributes.front} id={card.id} result={'is-danger'} handleChange={this.handleChange}/>
            </div>
          )
            }
        })}
        <br />
        <input type='submit' value='Submit Quiz' className='button is-primary' />
        </form>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return { stacks: state.stacks }
}

export default connect(mapStateToProps)(Quiz);