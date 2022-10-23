import React from 'react'
import '../styles/Task__appender.css';
export const Appender_Btns = ({actions}) => {
  return (
    <div className='btn-container'>
      <button onClick = {() => actions.shower()}>+</button>
    </div>
  )
}
