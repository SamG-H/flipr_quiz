import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stacks from './Stacks'
import Quiz from './Quiz'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  render() {
    return (
      <div  className='has-text-centered'>
        < Stacks />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { stacks: state.stacks }
}

export default connect(mapStateToProps)(StackContainer);