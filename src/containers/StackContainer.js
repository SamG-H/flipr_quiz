import React, { Component } from 'react'
import Stacks from '../components/Stacks'

export default class StackContainer extends Component {
  render() {
    return (
      <div className='has-text-centered'>
        <h1 className='is-size-1'>Review Stacks</h1>
        <Stacks />
      </div>
    )
  }
}

