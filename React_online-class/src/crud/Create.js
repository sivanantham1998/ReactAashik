import axios from 'axios';
import React, { useState } from 'react'
import View from './View';

export default function Create() {
    let [name,setname]=useState("")
    let [age,setage]=useState(0)
  return (
    <div>
        <form onSubmit={
            function(e)
            {
                e.preventDefault();
                axios.post("https://653a1ff0e3b530c8d9e9331c.mockapi.io/studentInfo",
                    {username:name,
                     userAge:age
                    }
                )
                alert("Data saved!!")
                setage(0);
                setname("");

                window.location.reload()
            }
        }>
            <input type='text' placeholder='Enter name' 
                value={name} onChange={(e)=>{
                    setname(e.target.value)
                }}
            />
            <input type='number' placeholder='Enter age' 
                value={age} onChange={(e)=>{
                    setage(e.target.value)
                }}
            />
            <input type='submit'/>
        </form>
        

        <View/>
    </div>
  )
}
