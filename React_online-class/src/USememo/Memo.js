import React, { useMemo, useState } from 'react'

export default function Memo() {
    let [num,seNum]=useState(0);


    function bigcal()
    {
        return num * 9876543743456;
    }


    let val=useMemo(()=>bigcal(),[num])
  return (
    <div>
        <h1>
            The value is:{num}  <br />
            updated :{val}
        </h1>

        <button
            onClick={()=>{
                seNum(num+1)
            }}
        >Click</button>
    </div>
  )
}
