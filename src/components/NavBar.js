import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <NavLink to="/" exact className='navbar-item'>Home</NavLink>
        <NavLink to="/about" exact className='navbar-item'>About</NavLink>
        <NavLink to="/quizzes" exact className='navbar-item'>Quizzes</NavLink>
        <NavLink to="/stacks" exact className='navbar-item'>Stacks</NavLink>
      </nav>
    )
  }
}
