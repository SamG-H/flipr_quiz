import React from 'react';
import Quiz from './Quiz'

export default function Quizzes({ stacks, handleClick }) {
    return (
        <div>
            {stacks.data.map(stack => {
              return (
                <Quiz key={stack.id} 
                id={stack.id}
                onClick={handleClick} 
                className='is-size-3 button is-link is-light' 
                title={stack.attributes.title}/>
              )}
            )}
        </div>
    );
};