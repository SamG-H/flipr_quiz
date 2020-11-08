import React, { Component } from 'react'
import { connect } from 'react-redux'
import StackList from './StackList'
import Quiz from './Quiz'

import {fetchStacks} from '../actions/stacksActions'

class StackContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
  }

  state = {
    stack_id: ''
  }

  handleClick = e => {
    console.log(e.target.id)
    this.setState({
      stack_id: e.target.id
    })
  }

  render() {
    return (
      <div>
        {this.state.stack_id === '' ? < StackList handleClick={this.handleClick}/> : < Quiz id={this.state.stack_id}/>}
      </div>
    )
  }
}

export default connect(null, {fetchStacks})(StackContainer);