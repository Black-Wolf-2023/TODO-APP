import React from 'react'
import '../styles/Task.css';

export const Tasks = ({data}) => {
  return (
    <div className='task-container'>
       {data.map(e => {
        return (
          <div className='task-cont' key={e.id}>
             <img src={e.img}/>
             <div>
                <p>{e.name}</p>
                <span>{e.task}</span>
             </div>
          </div>
        )
       })}
    </div>
  )
}
