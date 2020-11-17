import React, { Component } from 'react'
import Question from './Question'
import Score from './Score'

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
    this.setState({
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
          answers[id] = {
            content: this.state.answers[id].content,
            isCorrect: true
          }
          this.setState({
            answers
          })
        }
      })
    }
    return score;
  }

  configureColor = () => {
    
  }

  render() {
      return (
      <div>
        {this.state.submitted && <Score score={this.state.score} possible={document.querySelectorAll('input').length - 1}/> }
        <form onSubmit={this.handleSubmit}>
        {this.props.cards.data.map( card => {
            return (
            <div key={card.id}>
              <Question front={card.attributes.front} back={card.attributes.back} id={card.id} isSubmitted={this.state.submitted} isCorrect={this.state.submitted > 0 && this.state.answers[card.id].isCorrect} handleChange={this.handleChange}/>
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
