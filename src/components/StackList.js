import React from 'react';
import { connect } from 'react-redux'

const StacksList = ({ stacks, handleClick }) => {
  if(stacks.data){
    return (
        <div>
            <h1 className='is-size-1'>Stacks List:</h1>
            {stacks.data.map(stack =>
              <p key={stack.id} id={stack.id} onClick={handleClick} className='is-size-5'>
                {stack.attributes.title} - {stack.relationships.cards.data.length}
              </p>
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