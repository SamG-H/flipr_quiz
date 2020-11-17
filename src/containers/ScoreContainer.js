import React, { Component } from 'react'
import { connect } from 'react-redux'
import Scores from '../components/Scores'

class ScoreContainer extends Component {

  render() {
    if(this.props.scores.length === 0) {
      return null
    }
    
    return (
      <div className='has-text-centered'>
        <h1 className='is-size-1 has-text-link'>Scores:</h1>
        <Scores scores={this.props.scores} />
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    scores: state.scores
  }
}

export default connect(mapPropsToState) (ScoreContainer)