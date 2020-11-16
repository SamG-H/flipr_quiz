import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Stack extends Component {
  render() {
    return (
      <>
        <Link to={'/stacks/' + this.props.id} exact className='is-size-2 is-link'>{this.props.title}</Link><br />
      </>
    )
  }
}
