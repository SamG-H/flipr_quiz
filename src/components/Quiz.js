import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Quiz extends Component {

  state = {
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
    debugger
    console.log(this.state)
  }

  render() {
      return (
      <div  className='has-text-centered'>
        <h2 className='is-size-2'>{this.props.stacks.data[0].attributes.title}</h2>
        <form onSubmit={this.handleSubmit}>
        {this.props.stacks.included.map( card => {
          if (card.relationships.stack.data.id === this.props.id){
            return (
            <div key={card.id}>
              < Question front={card.attributes.front} handleChange={this.handleChange}/>
            </div>
          )
            }
        })}
        <input type='submit' value='Submit Quiz'/>
        </form>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return { stacks: state.stacks }
}

export default connect(mapStateToProps)(Quiz);