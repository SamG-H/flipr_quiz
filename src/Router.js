import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizContainer from "./containers/QuizContainer";
import About from "./components/About";
import QuizForm from "./components/QuizForm";
import StackContainer from "./containers/StackContainer";
import Stack from "./components/Stack";

export default function Router() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/quizzes" component={QuizContainer} />
      <Route
        exact={true}
        path="/quizzes/:id"
        component={(props) => <QuizForm {...props} />}
      />
      <Route exact={true} path="/stacks" component={StackContainer} />
      <Route
        exact={true}
        path="/stacks/:id"
        component={(props) => <Stack {...props} />}
      />
    </Switch>
  );
}
