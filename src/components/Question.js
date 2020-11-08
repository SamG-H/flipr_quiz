import React from 'react'

export default function Question({front, back, handleChange}) {
  return (
    <div>
      <label>{front}</label>
      <br />
      <input type='text' onChange={handleChange} name={front}/>
    </div>
  )
}
