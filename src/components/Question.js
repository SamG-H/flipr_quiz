import React from 'react'

export default function Question({front, back, id, handleChange, isCorrect, isSubmitted}) {
  let className = ''
  if(isSubmitted && isCorrect){
    className = ' is-success'
  } else if(isSubmitted){
    className = ' is-danger'
  }
    return (
      <div className='field'>
        <label className='label is-size-5'>{front}</label>
        <div className="control">
          <input type='text' onChange={handleChange} name={id} className={'input' + className}  style={{ width: '30%' }} required/>
        </div>
        
        {isSubmitted && !isCorrect ? <p className="help is-danger">{back}</p> : null}
      </div>
    )
}
