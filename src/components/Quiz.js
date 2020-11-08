import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Score from './Score'

class Quiz extends Component {

  state = {
    submitted: false,
    score: 0
  }

  handleChange = e => {
    const {name, value} = e.target
    //const answers = this.state.answers
    this.setState({
      [name] : value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted: true})
    const score = this.correctQuiz()
    console.log(this.correctQuiz())
    this.setState({score: score})
  }

  correctQuiz = () => {
    let score = 0
    for (const property in this.state) {
      //console.log(`${property}: ${this.state[property]}`);
      this.props.stacks.included.forEach( card => {
        if (card.id === property){
          if(this.state[property].toLowerCase() === card.attributes.back.toLowerCase()){ score += 1 }
        }
      })
    }
    return score;
  }

  render() {
      return (
      <div  className='has-text-centered'>
        <h2 className='is-size-2'>{this.props.stacks.data[0].attributes.title}</h2>
        {this.state.submitted ? < Score score={this.state.score} possible={document.querySelectorAll('input').length - 1}/> : null }
        <form onSubmit={this.handleSubmit}>
        {this.props.stacks.included.map( card => {
          if (card.relationships.stack.data.id === this.props.id){
            //this.setState({possible: this.state.possible + 1})
            return (
            <div key={card.id}>
              < Question front={card.attributes.front} id={card.id} handleChange={this.handleChange}/>
            </div>
          )
            }
        })}
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