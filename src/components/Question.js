import React from 'react'

export default function Question({front, id, handleChange, result}) {
  return (
    <div className='field'>
      <label className='label is-size-5'>{front}</label>
      <div class="control">
      <input type='text' onChange={handleChange} name={id} className={'input ' + result}  style={{ width: '30%' }}/>
      </div>
    </div>
  )
}
