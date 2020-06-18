import React from "react";
import { useParams } from "react-router-dom";
export default function GetParams() {
	let { cat, id } = useParams();
	return (
		<>
			<h1>Pega parametros da rota:</h1>
			<h3>
				rota acessada: {cat} com id {id}
			</h3>
		</>
	);
}
