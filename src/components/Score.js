import React from 'react'

export default function Score({score, possible}) {
  return (
    <div>
      <h1 className='is-size-2'>You Scored {score}/{possible}</h1>
    </div>
  )
}
