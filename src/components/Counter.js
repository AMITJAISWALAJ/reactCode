import React, { useState } from 'react'


export default function Counter() {
    const [count,setCount]=useState(0);
  
    const incress=()=>{
       setCount(count+1);
       
    };
    const decress=()=>{
        setCount(count-1);
        
    }
  return (
    <div>
        <h1>Create a simple counter. Increase the value of counter on the click event </h1>
        <button onClick={incress} style={{padding:"1%", width:"50px", marginLeft:"7px"}}>+</button>
        <span style={{fontSize:"25px", marginLeft:"7px"}}>{count}</span>
        <button onClick={decress} style={{padding:"1%", width:"50px", marginLeft:"7px"}}>-</button>

    </div>
  )
}
