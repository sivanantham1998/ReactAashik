import React, { useState } from 'react'

export default function SpreadOperator() {
    let [name,setName]=useState("");
    let [view,setView]=useState([]);

    function add()
    {
        // spreadOperators
        setView([...view,name])
        setName('')
    }
  return (
    <div>
        <ul>
            {view.map((q)=>(
                    <li>
                        {q}
                    </li>
            ))}
        </ul>
        <input type='text' placeholder='Enter ur Name' value={name} onChange={(e)=>{
          setName(e.target.value)  
        }}/>

        <button onClick={add}>Add</button>
    </div>
  )
}
