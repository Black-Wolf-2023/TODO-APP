import React, { useRef, useState } from 'react'

export const Form = ({data}) => {
    let inp__1 = useRef(0);
    let inp__2 = useRef(0);
    let [index,setIndex] = useState(0);
  return (
    <form onSubmit={(e) => e.preventDefault()} className='form' style={{left:data.position}}>
        <div className='content'>
            <input type="text" placeholder='Your Task' ref={inp__1}/>
            <input type="text" placeholder='Your Name' ref={inp__2}/>
            <button onClick={() => {
                data.data__Seter({id:Date.now(),name:inp__2.current.value,task:inp__1.current.value,img:'https://picsum.photos/60/60'});
                inp__1.current.value = '';
                inp__2.current.value = '';
                data.hidder();
            }}>ADD</button>
        </div>
        <span onClick={() => {
            data.hidder();
        }}>X</span>
    </form>
  )
}
