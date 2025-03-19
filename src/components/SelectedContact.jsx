import { useState, useEffect } from 'react'


function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json();
                setContact(result);
                console.log(result);
                
    
            } catch (error) {
                console.error(error);
            }
        } fetchApi();
    }, [selectedContactId]);
    
   return (
    <>
    <h2>Contact Details</h2>
    {contact ? (
        <div>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <h3>Address</h3>
                    <p>Street: {contact.address?.street}</p>
                    <p>Suite: {contact.address?.suite}</p>
                    <p>City: {contact.address?.city}</p>
                    <p>Zip Code: {contact.address?.zipcode}</p>
        </div>

    ) : (
        <p>Loading...</p>
    )}
    <button onClick={()=> setSelectedContactId(null)}>Back to List</button>
    </>
   )
}


export default SelectedContact