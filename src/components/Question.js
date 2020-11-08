import React from 'react'

export default function Question({front, id, handleChange}) {
  return (
    <div className='field'>
      <label className='label'>{front}</label>
      <div class="control">
      <input type='text' onChange={handleChange} name={id} className='input'/>
      </div>
    </div>
  )
}
