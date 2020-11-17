import React from 'react'

export default function Score({score, possible, handleClick}) {
  let className = ''
  if(possible > score){
    className=' has-text-danger'
  } else {
    className=' has-text-success'
  }
  return (
    <div>
      <p className={'is-size-2' + className}>You Scored {parseInt(score / possible * 100)}% </p>
      <p className={'is-size-2' + className}>{score}/{possible}</p>
      <button className='button is-link' onClick={handleClick}>Reset Quiz</button>
    </div>
  )
}
