import { useState } from "react"

export function Search(contacts) {

    const [search, setSearch] = useState('')

    // search function
	const handleSearch = (e) => {
		// console.log(e.target.value);
		setSearch(e.target.value)
	}

    const results = !search
			? contacts
			: contacts.filter( contact => contact.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <input
            type='text'
            value={search}
            onChange={handleSearch}
        />
    )
} 