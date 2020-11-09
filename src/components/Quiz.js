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
      this.props.stacks.included.forEach( card => {
        if (card.id === id){
          console.log('this.state.answers[id].content: ', this.state.answers[id].content)
          console.log('id: ', id)
          if(this.state.answers[id].content.toLowerCase() === card.attributes.back.toLowerCase()){ 
            score += 1
            let answers = {...this.state.answers}
            answers[id] = {
              isCorrect: true
            }
            console.log('answer b4 setState: ', answers[id].content)
            this.setState({answers},  function () {
              console.log('answer after setState: ', this.state.answers[id].content)
            })
          }
        }
      })
    }
    return score;
  }

  configureColor = () => {
    return null
  }

  render() {
      return (
      <div  className='has-text-centered'>
        <h2 className='is-size-2'>{this.props.title}</h2>
        {this.state.submitted ? < Score score={this.state.score} possible={document.querySelectorAll('input').length - 1}/> : null }
        <form onSubmit={this.handleSubmit}>
        {this.props.stacks.included.map( card => {
          //debugger
          if (card.relationships.stack.data.id === this.props.id){
            /*let answers = {...this.state.answers}
            answers[card.id] = {
              content: '',
              isCorrect: false
            }
            this.setState({answers})*/
            return (
            <div key={card.id}>
              < Question front={card.attributes.front} id={card.id} configureColor={this.configureColor} handleChange={this.handleChange}/>
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