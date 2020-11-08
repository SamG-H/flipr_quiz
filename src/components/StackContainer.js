import React, { Component } from 'react'
import { connect } from 'react-redux'
import StackList from './StackList'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
}
  render() {
    return (
      <div>
        < StackList />
      </div>
    )
  }
}

export default connect(null, {fetchStacks})(StackContainer);