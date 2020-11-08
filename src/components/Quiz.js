import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Quiz extends Component {
  render() {
    console.log(this.props.stacks.data[0].attributes.title)
      return (
      <div>
        {this.props.id}
        {this.props.stacks.data[0].attributes.title}
        {this.props.stacks.included.map( card => {
          if (card.relationships.stack.data.id === this.props.id){
            return (
            <div key={card.id}>
              <p>Front: {card.attributes.front}</p>
              <p>Back: {card.attributes.back}</p>
            </div>
          )
            }
        })}
      </div>
      )
  }
}

const mapStateToProps = state => {
  return { stacks: state.stacks }
}

export default connect(mapStateToProps)(Quiz);