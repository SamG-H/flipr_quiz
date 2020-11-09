import React from 'react'

export default function Question({front, id, handleChange, configureColor}) {
    return (
      <div className='field'>
        <label className='label is-size-5'>{front}</label>
        <div class="control">
        <input type='text' onChange={handleChange} name={id} className='input'  style={{ width: '30%' }}/>
        </div>
      </div>
    )
}
