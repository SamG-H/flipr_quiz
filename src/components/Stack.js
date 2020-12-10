import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsActions'
import Card from './Card'

class Stack extends Component {
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id)
  }

  render() {
    if(this.props.cards.length === 0) {
      return null
    }

    return (
      <div className='has-text-centered'>
        <h1 className='is-size-2 has-text-link'>{this.props.cards.included[0].attributes.title}</h1>
        {this.props.cards.data.map( card => {
            return (
              <Card
                front={card.attributes.front} 
                back={card.attributes.back} 
                id={card.id} 
                key={card.id}
              />
          )}
        )}
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

export default connect(mapStateToProps, mapDispatchToProps) (Stack)
