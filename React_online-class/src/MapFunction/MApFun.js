import React from 'react'

export default function MApFun() {
    let a=["one","two","three",1,2,3,"heelo"];
    let c=a.pop()
    let b=a.push("endOfTheText")
  return (
    <div>
        <ol>
            {a.map((q)=>(
                <li>
                    {q}
                </li>
            ))}
        </ol>
    </div>
  )
}
