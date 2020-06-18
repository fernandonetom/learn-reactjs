import React, { useState, useEffect } from "react";
export default function Storage() {
	const [name, setName] = useState(localStorage.getItem("name"));
	useEffect(() => {
		localStorage.setItem("name", name);
	}, [name]);
	return (
		<>
			Nome: {name}
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
		</>
	);
}
