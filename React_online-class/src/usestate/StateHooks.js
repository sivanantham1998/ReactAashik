import { useState } from "react"

export default function StateHooks()
{
    let [a,b]=useState("Erode")
    // a is a State variable , b setVariable (update variable)


    function ok()
    {
        b("ErodeIsSmartCity")
    }
    return(
        <>
            <h1>
                {a}
            </h1>
           <center>
           <button onClick={ok}>change</button>
           </center>
        </>
    )
}