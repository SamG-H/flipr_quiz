import React, { Component } from 'react'

export default class Stack extends Component {
  render() {
    console.log(this.props.title)
    return (
      <p>
        {this.props.title}
      </p>
    )
  }
}
