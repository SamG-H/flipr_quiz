import React from 'react';


export default function Scores({ scores }) {
    return (
        <div>
            {scores.data.map(score => {
              const stack = scores.included.find(stack => {
                return stack.id === score.relationships.stack.data.id
              })
              return (
                <div key={score.id}>
                  <p className='is-size-3'>{score.attributes.name} scored a {score.attributes.percentage} on {stack.attributes.title}</p>
                </div>
              )}
            )}
        </div>
    );
};