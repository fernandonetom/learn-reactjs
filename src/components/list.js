import React, { useState, useEffect } from "react";
import SearchBox from "./search";

export default function List() {
	const [textSearch, setText] = useState("");
	function handleSearchInput(text) {
		setText(text);
	}
	return (
		<>
			<SearchBox frasePadrao="buscar..." onChangeText={handleSearchInput} />

			<SearchBox frasePadrao={textSearch} />
			<div>Texto procurado: {textSearch}</div>
		</>
	);
}
