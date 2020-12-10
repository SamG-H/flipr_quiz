import React, { Component } from 'react'
import '../Card.css'

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className='card'>{this.props.front}</div>
        <div className='card' style={{display: 'none'}}>{this.props.back}</div>
      </div>
    )
  }
}
