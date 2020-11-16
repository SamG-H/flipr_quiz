import React from 'react';
import { connect } from 'react-redux'
import Stack from './Stack'
import Home from './Home'
import { BrowserRouter, Route } from 'react-router-dom'

const StacksList = ({ stacks, handleClick }) => {
  if(stacks.data){
    return (
        <div className='has-text-centered'>
            <h1 className='is-size-1'>Stacks List:</h1>
            {stacks.data.map(stack => {
              return (
                <Stack key={stack.id} 
                id={stack.id}
                onClick={handleClick} 
                className='is-size-3 button is-link is-light' 
                title={stack.attributes.title}/>
              )}
            )}
        </div>
    );
  }
  else {
    return (<div></div>)
  }
};

const mapStateToProps = state => {
    return { stacks: state.stacks }
}

export default connect(mapStateToProps)(StacksList);