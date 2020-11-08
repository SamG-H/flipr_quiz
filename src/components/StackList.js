import React from 'react';
import { connect } from 'react-redux'

const StacksList = ({ stacks }) => {
    return (
        <div>
            <h1>Stacks List:</h1>
            {stacks.map(stack => 
                <ul key={stack.id}>
                    <li >
                        {stack.attributes.title}
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { stacks: state.stacks }
}

export default connect(mapStateToProps)(StacksList);