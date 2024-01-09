import React, { useEffect, useState } from 'react'
import Reduce from '../Usereducer/Reduce';

export default function Effect() {
    let [num,setnum]=useState(0);

    useEffect(
        function(){
            console.log("button clicked:"+num);
            document.title='rendered count:'+num;

            fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then(response => response.json())
              .then(json => console.log(json))
        },[]
    )
  return (
    <div>
        <h1 className='bg-success'>
            UseEffect
        </h1>
        <h3>
            {num}
        </h3>
        <button 
            onClick={function(){
                setnum(num+1)
            }}
        >
            Click
        </button>

        <Reduce/>
    </div>
  )
}
