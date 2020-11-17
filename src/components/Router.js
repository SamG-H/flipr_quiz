import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Home from './Home'
import QuizContainer from './QuizContainer'
import About from './About'
import QuizForm from './QuizForm'

export default function Router() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/quizzes' component={QuizContainer} />
        <Route exact path="/quizzes/:id" component={props => <QuizForm {...props} />} />
      </Switch>
  )
}
