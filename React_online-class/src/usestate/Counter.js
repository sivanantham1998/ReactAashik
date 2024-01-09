import { useState } from "react"
import { Link } from "react-router-dom";

export default function Counter()
{
    let [num,setNum]=useState(0);

    function add()
    {
        setNum(num+1)  // => current value =0 ; 0+1
    }
    function minus()
    {
        setNum(num-1)
    }
    function reset()
    {
        setNum(0)
    }
    return(
        <>
            <center>
                <h1>
                    {num}
                </h1>

                <button onClick={add}>Add</button>
                <button onClick={minus}>Minus</button>
                <button onClick={reset}>Reset</button>

                <br />

              <Link to="refhook">
              <button>
                    RefHook
                </button>
              </Link>


              <Link to="create">
                <button>
                    Create
                </button>
              </Link>

              
            </center>
        </>
    )
}