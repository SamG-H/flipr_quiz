import React from 'react'

export default function Score({score, possible}) {
  return (
    <div>
      <h1 className='is-size-2 has-text-link'>You Scored {score}/{possible}</h1>
    </div>
  )
}
