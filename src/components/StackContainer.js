import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stacks from './Stacks'
import Quiz from './Quiz'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  render() {
    if(this.props.stacks.length === 0) {
      return null
    }
    return (
      <div  className='has-text-centered'>
        <Stacks stacks={this.props.stacks} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { stacks: state.stacks }
}

export default connect(mapStateToProps)(StackContainer);