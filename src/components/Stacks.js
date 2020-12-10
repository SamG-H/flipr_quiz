import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Stacks extends Component {
  render() {
    if(this.props.stacks.length === 0) {
      return null
    }

    return (
      <div>
        {this.props.stacks.data.map(stack => {
          return (
            <>
              <Link to={'/stacks/' + stack.id} exact className='is-size-2 is-link' key={stack.id}>{stack.attributes.title}</Link><br />
            </>
          )}
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stacks: state.stacks
  }
}

export default connect (mapStateToProps) (Stacks)
