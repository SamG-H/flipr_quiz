import React from 'react'

export default function Score({score, possible}) {
  let className = ''
  if(possible > score){
    className=' has-text-danger'
  } else {
    className=' has-text-success'
  }
  return (
    <div>
      <p className={'is-size-2' + className}>You Scored {score}/{possible}</p>
    </div>
  )
}
