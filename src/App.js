import React, { useEffect, useMemo, useState } from 'react'
import { Appender_Btns } from './components/Appender_Btns'
import { Num_Items } from './components/Num_Items'
import { Tasks } from './components/Tasks'
import './App.css';
import { Form } from './components/Form';
export const App = () => {
    let [data,setData] = useState([{id:0,name:'Ali Ahmed',task:'playing some sport',img:'https://picsum.photos/60/60'}]);
    let [position,setPosition] = useState('-100%');



    let shower = ()=>{
        setPosition('0');
    }
    let hidder = () =>{
        setPosition('-100%');
    }

   let  data__Seter = (newData) =>{
      setData(data.concat(newData))
   }

  return (
    <div className='container'>
        <Num_Items length = {data.length}/>
        <Tasks data={data}/>    
        <Appender_Btns actions= {{shower}}/>
        <Form data = {{position,hidder,data__Seter}}/>
    </div>
  )
}
