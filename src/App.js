import React, { Component } from 'react'
import Router from './Router'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchStacks } from './actions/stacksActions'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchStacks()
  }
  
  render() {
    return (
      <div>
        <NavBar />
        < Router />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStacks: () => dispatch(fetchStacks())
  }
}

export default connect(null, mapDispatchToProps) (App)