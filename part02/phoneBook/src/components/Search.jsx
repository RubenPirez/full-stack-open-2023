import { useState } from "react"

export function Search({setSearch, search}) {

	//const [search, setSearch] = useState('')

	// search function
	const handleSearch = (e) => {
		// console.log(e.target.value);
		setSearch(e.target.value)
	}

    return (
			<input
					type='text'
					value={search}
					onChange={handleSearch}
			/>
    )
}