import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <p className='is-size-4'>{this.props.front} - {this.props.back}</p>

      </div>
    )
  }
}
