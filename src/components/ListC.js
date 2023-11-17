import React from 'react'

export default function ListC() {
  const plang=['C', 'C++', 'CoreJava', 'Python', 'Javascript'];
    
  return (
     <div style={{ border:"5px solid green;", width:"400px",backgroundColor:"red"}}>
      <h1>HTML UNORDER LIST</h1>
      <h3>Coding Language</h3>
      <ul>
        <li>{plang[0]}</li>
        <li>{plang[1]}</li>
        <li>{plang[2]}</li>
        <li>{plang[3]}</li>
        <li>{plang[4]}</li>
      </ul>
    </div>

  )
}
