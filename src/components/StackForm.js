import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addStack } from '../actions/stacksActions'

class StackForm extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addStack(this.state)
    this.setState({
      title: ''
    })
  }

  render() {
      return (
        <div>
          <h2 className='is-size-2'>Add a New Stack</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
              <label className='field-label is-size-4'>Title:</label>
              <div className='control'>
                <input
                  placeholder='Stack Title'
                  type='text'
                  value={this.state.title}
                  onChange={this.handleChange}
                  name='title'
                  className='input'
                  style={{ width: '30%' }}
                  required />
              </div>
            </div>
              <input type='submit' value='Add Stack' className='button is-link'/>
          </form>
        </div>
    );
  }
}

export default connect(null, { addStack })(StackForm);
