import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stacks from './Stacks'
import Quiz from './Quiz'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
  }

  render() {
    return (
      <div  className='has-text-centered'>
        < Stacks />
        {/*< Quiz id={this.state.stack_id} title={this.state.stack_title} resetStackId={this.resetStackId} />*/}
      </div>
    )
  }
}

export default connect(null, {fetchStacks})(StackContainer);