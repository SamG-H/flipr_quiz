import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsActions'
import Card from './Card'
import CardForm from './CardForm'
import { Link } from 'react-router-dom'

class Stack extends Component {
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id)
  }

  render() {
    if(this.props.cards.length === 0) {
      return null
    } else if (!this.props.cards.included[0]){
      return (
      <div className='has-text-centered'>
        <h1 className='is-size-2 has-text-danger'>No cards in this stack yet!</h1>
        <CardForm stackId={this.props.match.params.id} />
        <Link to='/stacks' exact className='is-size-2 is-link'>Go back to stacks</Link>
      </div> )
    }

    return (
      <div className='has-text-centered'>
        <h1 className='is-size-2'>{this.props.cards.included[0].attributes.title}</h1>
        <div className='cardsDiv'>
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
        <CardForm stackId={this.props.match.params.id} />
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
