import React from 'react'
import { Switch, Route, } from 'react-router-dom'


import Home from './Home'
import StackContainer from './StackContainer'
import About from './About'
import Quiz from './Quiz'
import QuizContainer from './QuizContainer'

export default function Router() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/stacks' component={StackContainer} />
        <Route exact path="/stacks/:id" component={props => <QuizContainer {...props} />} />
      </Switch>
  )
}
