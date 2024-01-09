import React, { useReducer } from 'react'

function cal(num,action)
{
    switch (action.type) {
        case "+":
            return {val:num.val+1}
        case "-":
            return {val:num.val-1}
        case '0':
            return {val:0}
        default:
    
    }
}
export default function Reduce() {
    let [num,setNum]=useReducer(cal,{val:0})
  return (
    <div>

        <h1>
            {num.val}
        </h1>
        <center>
        <button
            onClick={function(){
                setNum({type:"+"})
            }}
        >Add</button>

        <button
            onClick={function(){
                setNum({type:"-"})
            }}
        >
            minus
        </button>

        <button
            onClick={function(){
                setNum({type:'0'})
            }}
        >
            reset
        </button>

</center>
    </div>
  )
}
