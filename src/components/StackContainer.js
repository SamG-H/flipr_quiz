import React, { Component } from 'react'
import { connect } from 'react-redux'
import StackList from './StackList'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
  }

  handleClick = e => {
    console.log(e.target.id)
  }

  render() {
    return (
      <div>
        < StackList handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default connect(null, {fetchStacks})(StackContainer);