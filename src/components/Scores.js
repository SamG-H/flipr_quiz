import React from 'react';
import Score from './Score'

export default function Scores({ scores, handleClick }) {
    return (
        <div>
            {scores.data.map(score => {
              return (
                <p>{score.attributes.name} scored a {score.attributes.percentage}</p>
              )}
            )}
        </div>
    );
};