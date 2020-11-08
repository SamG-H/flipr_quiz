import React from 'react';
import { connect } from 'react-redux'

const StacksList = ({ stacks }) => {
  if(stacks){
    console.log(stacks)
    return (
        <div>
            <h1 className='is-size-1'>Stacks List:</h1>
            <table className='table is-hoverable is-striped'>
              <thead>
                <th>Title</th>
                <th> # of cards in stack</th>
              </thead>
            {stacks.data.map(stack =>
                <tr key={stack.id}>
                    <td>{stack.attributes.title}</td>
                    <td>{stack.relationships.cards.data.length}</td>
                </tr>
        )}
        </table>
        </div>
    );
            }
            else
            return (<div></div>)
};

const mapStateToProps = state => {
    return { stacks: state.stacks }
}

export default connect(mapStateToProps)(StacksList);