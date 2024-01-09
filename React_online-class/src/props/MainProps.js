import Alternate from "./Alternatre"
import Logo from '../logo.svg'

export default function MainProps()
{
    let town={
        name:'Chennai',
        yearOfBirth:1700,
        images:Logo
    }
    return(
        <>
        <h1>

            Welcome to Props
        </h1>

        <Alternate village={town}/>
        
        </>
    )
}