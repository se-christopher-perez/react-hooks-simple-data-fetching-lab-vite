// create your App component here
import React, { useEffect, useState } from "react";

const api = "https://dog.ceo/api/breeds/image/random"

function App() {

    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchDog()

    }, [])

    function fetchDog() {

        setLoading(true)

        fetch(api)
            .then(r => {

                if (!r.ok) { console.log("ERROR") }

                return r.json()

            })
            .then(data => {
                setLoading(false)
                setImage(data.message)
            })

    }


    return (

        <>

            <div>
                {loading ? <p>Loading...</p> : <img src={image} />}
                <button onClick={fetchDog} >Fetch Dog</button>

            </div>

        </>

    )

}

export default App