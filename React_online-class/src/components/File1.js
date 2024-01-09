import "../Css/File1.css"
import Logo from '../logo.svg'
export default function File1()
{
    let name="Sivanantham";
    let age=26;
    return(
        <>
            <h1>Hello welcome to React</h1>

            <li>
                {name},{age}
            </li>

            {/* <img src={Logo}/> */}
        </>
    )
}