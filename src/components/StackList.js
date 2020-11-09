import React from 'react';
import { connect } from 'react-redux'

const StacksList = ({ stacks, handleClick }) => {
  if(stacks.data){
    return (
        <div>
            <h1 className='is-size-1'>Stacks List:</h1>
            {stacks.data.map(stack =>
            <div>
              <button key={stack.id} id={stack.id} onClick={handleClick} className='is-size-3 button is-link is-light'>
                {stack.attributes.title}
              </button>
              </div>
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