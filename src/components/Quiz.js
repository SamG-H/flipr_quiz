import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Quiz extends Component {
  render() {
    return (
      <>
        <Link to={'/quizzes/' + this.props.id} exact className='is-size-2 is-link'>{this.props.title}</Link><br />
      </>
    )
  }
}
