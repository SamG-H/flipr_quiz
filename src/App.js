import React, { useEffect } from "react";
import Router from "./Router";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import { fetchStacks } from "./actions/stacksActions";

function App({ fetchStacks }) {
  useEffect(() => {
    fetchStacks();
  }, [fetchStacks]);

  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStacks: () => dispatch(fetchStacks()),
  };
};

export default connect(null, mapDispatchToProps)(App);
