import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Ref() {
    let [name,setname]=useState("")
    let count=useRef(0);
    let input=useRef("")


    useEffect(()=>{
        count.current=count.current+1
        input.current=name
    })
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>{
            setname(e.target.value)
        }}/>
        <h2>
            Rendered count : {count.current}  <br/>
            Current state:{name}  <br/>
            Previous state: {input.current}
        </h2>

        <Link to="/">
            <img src='https://cdn5.vectorstock.com/i/1000x1000/70/09/close-icon-rounded-squares-button-vector-4527009.jpg' height="50px"/>
        </Link>
    </div>
  )
}
