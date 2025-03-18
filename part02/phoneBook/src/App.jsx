import './App.css'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { Contacts } from './components/Contacts'
import { Note } from './components/Note'
//import AddContact from './components/AddContact'

const App = () => {

	// const [contacts, setContacts] = useState([])
	// const [newName, setNewName] = useState('')
	// const [newNumber, setNewNumber] = useState('')

	// const addContact = (e) => {
	// 	e.preventDefault()
	// 	const contactObject = {
	// 		name: newName,
	// 		phone: newNumber
	// 	}

	// 	const exists = contacts.filter((contact) => {
	// 		return contact.name.toLowerCase() === contactObject.name.toLowerCase()
	// 	})

	// 	if (exists.length > 0) {
	// 		alert(`${newName} is already added to phonebook`)
	// 		setNewName('')
	// 	} else {
	// 		setContacts(contacts.concat(contactObject))
	// 		setNewName('')
	// 		setNewNumber('')
	// 	}
	// }

	// const handlecontactsChange = (e) => {
	// 	// console.log(e.target.value)
	// 	setNewName(e.target.value)
	// }

	// const handleNumberChange = (e) => {
	// 	// console.log(e.target.value)
	// 	setNewNumber(e.target.value)
	// }

	return (
		<div>
			<h1>PhoneBook</h1>
			<Contacts />
			<hr />
			<hr />
			<Note />
		</div>
	)
}

export default App
