import React from 'react'

export default function SumC(props) {
    const getsum =()=>{
      let  totalsum=props.num1+props.num2;
      alert(totalsum);
    }
  return (
    <div>
      <button onClick={getsum}>Get Sum</button>
    </div>
  )
}
