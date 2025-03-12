import './App.css'
import React, { useState } from 'react'
//import AddContact from './components/AddContact'

const App = () => {
	const [contacts, setContacts] = useState([
		{ name: 'Arto Hellas', phone: '040-123456' },
		{ name: 'Ada Lovelace', phone: '39-44-5323523' },
		{ name: 'Dan Abramov', phone: '12-43-234345' },
		{ name: 'Mary Poppendieck', phone: '39-23-6423122' }
	  ])
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
			<h2>Contacts</h2>
			<div><ul>{results.map((contact) => (
				<li key={contact.name}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0284c7" d="m14 21l-2 2l-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21zm-7.643-3h11.49a6.992 6.992 0 0 0-5.745-3a6.992 6.992 0 0 0-5.745 3M12 13a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"/></svg>  {contact.name} <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0284c7" d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71c0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9c.98.49 1.85 1.12 2.67 1.85c.18.18.43.28.68.28c.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71c0-.28-.12-.52-.3-.7A16.965 16.965 0 0 0 12 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7zm3 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.5A2.5 2.5 0 0 0 9.5 16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg> {contact.phone}</li>
			))}</ul></div>
		</div>
	)
}

export default App
