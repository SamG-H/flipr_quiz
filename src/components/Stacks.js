import React from 'react';
import Stack from './Stack'

export default function Stacks({ stacks, handleClick }) {
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
};