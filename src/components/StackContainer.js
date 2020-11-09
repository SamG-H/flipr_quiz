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
    stack_id: '',
    stack_title: ''
  }

  handleClick = e => {
    console.log(e.target)
    this.setState({
      stack_id: e.target.id,
      stack_title: e.target.firstChild.data
    })
  }

  render() {
    return (
      <div  className='has-text-centered'>
        {this.state.stack_id === '' ? < StackList handleClick={this.handleClick}/> : < Quiz id={this.state.stack_id} title={this.state.stack_title} />}
      </div>
    )
  }
}

export default connect(null, {fetchStacks})(StackContainer);