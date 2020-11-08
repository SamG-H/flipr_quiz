import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from './Home'
import StackContainer from './StackContainer'
import About from './About'
import NavBar from './NavBar'

export default function Router() {
  return (
    <switch>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/stacks' component={StackContainer} />
    </switch>
  )
}
