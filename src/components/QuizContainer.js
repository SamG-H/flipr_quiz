import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsActions'
import Quiz from './Quiz'

class QuizContainer extends Component {
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id)
  }

  render() {
    if(this.props.cards.length === 0) {
      return null
    }
    return (
      <div className='has-text-centered'>
        <h1 className='is-size-2'>{this.props.cards.included[0].attributes.title} Quiz</h1>
        <Quiz cards={this.props.cards} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: (id) => dispatch(fetchCards(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (QuizContainer)