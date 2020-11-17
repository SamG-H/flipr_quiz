import React, { Component } from 'react'
import { connect } from 'react-redux'
import Quizzes from './Quizzes'

class QuizContainer extends Component {

  render() {
    if(this.props.stacks.length === 0) {
      return null
    }
    
    return (
      <div className='has-text-centered'>
        <Quizzes stacks={this.props.stacks} />
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    stacks: state.stacks
  }
}

export default connect(mapPropsToState) (QuizContainer)
