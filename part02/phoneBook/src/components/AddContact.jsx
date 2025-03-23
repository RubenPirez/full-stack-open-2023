import { useState } from "react"
import axios from 'axios'

export function AddContact({ addUser }) {

	const url = 'http://localhost:3001/contacts'
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
		if (newName === '' || newNumber === '') {
            alert('Please fill in all fields')
            return
        }
        addUser = {
            name: newName,
            number: newNumber
        }
				axios
				.post(url, addUser)
				.then((response) => {
					alert('Contacto añadido correctamente')
				})
        setNewName('')
        setNewNumber('')
	}

    return (
        <>
        <h3>Add New Contact</h3>
			<form onSubmit={handleSubmit}>
				<div>
					Name: 
						<input
							type='text'
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
						/>
				</div>
				<div>
					Number:
						<input
							type='text'
							value={newNumber}
							onChange={(e) => setNewNumber(e.target.value)}
						/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
        </>
    )
}