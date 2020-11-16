import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Score from './Score'
import { fetchCards } from '../actions/cardsActions'

export default class Quiz extends Component {

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
    this.setState({answers})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted: true})
    const score = this.correctQuiz()
    //console.log(this.correctQuiz())
    this.setState({score: score})
  }

  correctQuiz = () => {
    let score = 0
    for (const id in this.state.answers) {
      this.props.cards.data.forEach( card => {
        if(this.state.answers[id].content.toLowerCase() === card.attributes.back.toLowerCase()){ 
          score += 1
          let answers = {...this.state.answers}
          answers[id] = {
            isCorrect: true
          }
          console.log('answer b4 setState: ', answers[id].content)
          this.setState({
            answers
          })
        }
      })
    }
    return score;
  }

  configureColor = () => {
    return null
  }

  render() {
    //  debugger
      return (
      <div>
        {this.state.submitted && < Score score={this.state.score} possible={document.querySelectorAll('input').length - 1}/> }
        <form onSubmit={this.handleSubmit}>
        {this.props.cards.data.map( card => {
            return (
            <div key={card.id}>
              <Question front={card.attributes.front} id={card.id} configureColor={this.configureColor} handleChange={this.handleChange}/>
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
