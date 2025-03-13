import './App.css'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { Contacts } from './components/Contacts'
//import AddContact from './components/AddContact'

const App = () => {

	const [contacts, setContacts] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')

	const addContact = (e) => {
		e.preventDefault()
		const contactObject = {
			name: newName,
			phone: newNumber
		}

		const exists = contacts.filter((contact) => {
			return contact.name.toLowerCase() === contactObject.name.toLowerCase()
		})

		if (exists.length > 0) {
			alert(`${newName} is already added to phonebook`)
			setNewName('')
		} else {
			setContacts(contacts.concat(contactObject))
			setNewName('')
			setNewNumber('')
		}
	}

	const handlecontactsChange = (e) => {
		// console.log(e.target.value)
		setNewName(e.target.value)
	}

	const handleNumberChange = (e) => {
		// console.log(e.target.value)
		setNewNumber(e.target.value)
	}

	// search function
	const handleSearch = (e) => {
		// console.log(e.target.value);
		setSearch(e.target.value)
	}

	const results = !search
			? contacts
			: contacts.filter( contact => contact.name.toLowerCase().includes(search.toLowerCase()))

	return (
		<div>
			<h1>PhoneBook</h1>
			<div className='search'>
			Filter shown with: <input
						type='text'
						value={search}
						onChange={handleSearch}
					/>
			</div>
			<h3>Add New Contact</h3>
			<form>
				<div>
					Name: <input
						type='text'
						value={newName}
						onChange={handlecontactsChange}
					/>
				</div>
				<div>
					Number: <input
						value={newNumber}
						onChange={handleNumberChange}
					/>
				</div>
				<div>
					<button onClick={addContact} type="submit">Add</button>
				</div>
			</form>
			<Contacts />
		</div>
	)
}

export default App
