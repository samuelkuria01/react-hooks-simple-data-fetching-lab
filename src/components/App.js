// create your App component here
import React, { useEffect } from "react";

function App(){
    const [dogPicture, setDogPicture]= useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{setDogPicture(data.message)
        })
    },[])
    if (!dogPicture) return <p>Loading</p>
    return(
        <img src={dogPicture} alt="A Random Dog">

        </img>
    )
}
export default App;