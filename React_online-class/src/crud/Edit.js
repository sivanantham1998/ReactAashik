import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Edit() {
    let [id,setid]=useState(0)
    let [name,setname]=useState("")
    let [age,setage]=useState(0)
    let ApI="https://653a1ff0e3b530c8d9e9331c.mockapi.io/studentInfo";

    let navi=useNavigate()



    useEffect(()=>{
        setid(localStorage.getItem("id"));
        setname(localStorage.getItem("username"));
        setage(localStorage.getItem("usertAge"));
    },[])
  return (
    <div>
        <h1>
            Update Your Data
        </h1>
         <form onSubmit={
            function(e)
            {
                e.preventDefault();
                axios.put(`${ApI}/${id}`,{username:name,userAge:age})
                alert("Data Updated!!")
                 navi("/create")             
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
    </div>
  )
}
