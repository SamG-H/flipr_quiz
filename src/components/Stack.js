import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Home from './Home'

export default class Stack extends Component {
  render() {
    return (
      <>
        <NavLink to={'/stacks/' + this.props.id} exact className='is-size-2 is-link'>{this.props.title}</NavLink><br />
      </>
    )
  }
}
