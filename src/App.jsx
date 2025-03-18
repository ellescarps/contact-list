import { useState } from 'react'
import './App.css'
import ContactList from "./components/ContactList";

function App() {
  const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState();
  console.log("Contacts: ", contacts);
  
  return (
    <>
      <ContactList  />
    </>
  )
}

export default App
