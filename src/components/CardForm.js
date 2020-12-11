import React, { Component } from 'react'

export default class CardForm extends Component {
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


  render() {
    return (
      <div>
        <h2 className='is-size-2'>Add a card to this stack</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='field is-horizontal'>
            <label className='field-label'>Front:</label>
            <div className='control'>
              <input
                placeholder='front'
                type='text'
                value={this.state.front}
                onChange={this.handleChange}
                name='front'
                className='input'
                required />
            </div>
          </div>
          <div className='field is-horizontal'>
            <label className='field-label'>Back:</label>
            <div className='control'>
              <input
                placeholder='back'
                type='text'
                value={this.state.back}
                onChange={this.handleChange}
                name='back'
                className='input'
                required />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
