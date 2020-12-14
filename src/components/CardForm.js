import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cardsActions'

class CardForm extends Component {
  constructor() {
    super()
    this.state = {
      front: '',
      back: '',
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCard(this.props.stackId, this.state)
    this.setState({
      front: '',
      back: ''
    })
  }

  render() {
    return (
      <div>
        <h2 className='is-size-2'>Add a New Card</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='field-label is-size-4'>Front:</label>
            <div className='control'>
              <input
                placeholder='Front of Card'
                type='text'
                value={this.state.front}
                onChange={this.handleChange}
                name='front'
                className='input'
                style={{ width: '30%' }}
                required />
            </div>
          </div>
          <div className='field'>
            <label className='field-label is-size-4'>Back:</label>
            <div className='control'>
              <input
                placeholder='Back of Card'
                type='text'
                value={this.state.back}
                onChange={this.handleChange}
                name='back'
                className='input'
                style={{ width: '30%' }}
                required />
            </div>
          </div>
            <input type='submit' value='Add Card' className='button is-link'/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addCard }) (CardForm)
