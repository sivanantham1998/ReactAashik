import { useState } from "react"

export default function Forms()
{
    let [name,setName]=useState("siva");

    function chan(e)
    {
        setName(e.target.value)
    }
    return(
        <>
            <h2>React Forms</h2>
            <input type="text" placeholder="enter name here" value={name} onChange={chan}/>
            <h1>Welcome,{name}</h1>
        </>
    )
}