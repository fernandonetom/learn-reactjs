import React, { useState, useEffect } from "react";
import styled from "styled-components";
export const InputText = styled.input`
	width: 200px;
	height: 30px;
	border: 2px solid #ccc;
`;

export default function SearchBox(props) {
	const [texto, setTexto] = useState("");

	useEffect(() => {
		if (props.onChangeText) {
			props.onChangeText(texto);
		}
	}, [texto]);

	return (
		<InputText
			type="text"
			value={texto}
			onChange={(e) => setTexto(e.target.value)}
			placeholder={props.frasePadrao}
		/>
	);
}
