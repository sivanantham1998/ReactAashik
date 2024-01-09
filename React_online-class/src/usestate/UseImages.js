import { useState } from "react"
import sun from "../sun.webp"
import img from "../weic2216b.jpg"
export default function UseImages()
{
    let [images,setImages]=useState(img);
    function change()
    {
        setImages(sun)
    }
    return(
        <>
        <h1>Images using Usestate</h1>
            <button onClick={change}>Change</button>
        <img src={images}  height="250px"/>
        </>
    )
}