import { useState } from "react"

export function AddContact({contacts, setContacts}) {

	//const [contacts, setContacts] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		

		//e.preventDefault()
		const contactObject = {
			name: newName,
			phone: newNumber
		}
		console.log('CONT', contacts);
		//console.log('SET', setContacts);

		const exists = contacts.filter((contact) => {
			return contact.name.toLowerCase() === contactObject.name.toLowerCase()
		})

		console.log(exists);
		console.log(contactObject);
	/*
		if (exists.length > 0) {
			alert(`${newName} is already added to phonebook`)
			setNewName('')
		} else {
			setContacts(contacts.concat(contactObject))
			setNewName('')
			setNewNumber('')
		}
	*/
	}
	const handleNameChange = (e) => {
		// console.log(e.target.value)
		setNewName(e.target.value)
	}

	const handleNumberChange = (e) => {
		// console.log(e.target.value)
		setNewNumber(e.target.value)
	}

	
	return (
		<form>
			<div>
				Name: <input
					type='text'
					value={newName}
					onChange={handleNameChange}
				/>
			</div>
			<div>
				Number: <input
					value={newNumber}
					onChange={handleNumberChange}
				/>
			</div>
			<div>
				<button onClick={handleSubmit} type="submit">Add</button>
			</div>
		</form>
	)
}