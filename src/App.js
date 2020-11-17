import React, { Component } from 'react'
import Router from './Router'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchStacks } from './actions/stacksActions'
import { fetchScores } from './actions/scoresActions'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchStacks()
    this.props.fetchScores()
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
    fetchStacks: () => dispatch(fetchStacks()),
    fetchScores: () => dispatch(fetchScores())
  }
}

export default connect(null, mapDispatchToProps) (App)