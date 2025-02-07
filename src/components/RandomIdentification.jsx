import React, { useState } from 'react'
import Card from './Cards'

const RandomIdentification = () => {
    const [person, setPerson] = useState(null);
    const [loadingPerson, setLoadingPerson] = useState(false);
    const [error, setError] = useState(null);
    const randomIden = () => {
        setLoadingPerson(true);
        fetch("https://randomuser.me/api/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setPerson(data.results[0]);
                } else {
                    setError("No user data received");
                }
                setLoadingPerson(false)
            })
            .catch((error) => {
                console.error("Error fetching Random person fact:", error);
                setLoadingPerson(false);
                setError("Error fetching data. Please try again."); // Set an error message in the person state
            });
    }
    return (
        <div className="flex flex-col justify-start items-start bg-gray-100 h-full">
            <Card
                title="Random Identification"
                content={loadingPerson ? "Fetching Random Identification..." : error ? error : person ? (
                    <div>
                        <p>Name: {person.name.first} {person.name.last}</p>
                        <p>Gender: {person.gender}</p>
                        <p>Email: {person.email}</p>
                        <img src={person.picture.medium} alt="Person's picture" className='mx-auto block' /> {/* Example: Display the picture */}
                        {/* ... display other properties as needed ... */}
                    </div>
                )
                    : "No Random Identification available"
                } // Corrected content prop
                buttonText="Fetch New Random Identification"
                onButtonClick={randomIden}
            />
        </div>
    )
}

export default RandomIdentification
