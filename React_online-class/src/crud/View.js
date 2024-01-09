import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function View() {
    let [view,setview]=useState([])
    let ApI="https://653a1ff0e3b530c8d9e9331c.mockapi.io/studentInfo"
    useEffect(()=>{
        axios.get("https://653a1ff0e3b530c8d9e9331c.mockapi.io/studentInfo").then((s)=>{
            setview(s.data)
        })
    },[]);
    let navi=useNavigate()


    function del(z)
    {
        axios.delete(`${ApI}/${z}`)
        .then(()=>{
            axios.get(`${ApI}`).then((s)=>{
                setview(s.data)
            })
        })
    }

    let editData=(a,b,c)=>
    {
        localStorage.setItem("id",a);
        localStorage.setItem("username",b);
        localStorage.setItem("userAge",c);
       navi('/update')
    }
  return (
    <div>
        <table>
            <tr>
                <th>Userid</th>
                <th>USerName</th>
                <th>USerAge</th>
                <th>Operatios</th>
            </tr>
            {view.map((q)=>
                (
                    <tr>
                <td>{q.id}</td>
                <td>{q.username}</td>
                <td>{q.userAge}</td>
                <td>
                    <button onClick={()=>del(q.id)}>Del</button>
                   
                        <button onClick={()=>editData(q.id,q.username,q.userAge)}>
                            Edit
                        </button>
                  
                </td>
                    </tr>
                )
            )}
        </table>
    </div>
  )
}
