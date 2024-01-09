export default function Alternate(a)
{
    let {village}=a
    return(
        <>
            <h1>
                My homeTown is : {village.name}
                 {village.yearOfBirth}
            </h1>
            <img src={village.images} />
        </>
    )
}