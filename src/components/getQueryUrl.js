import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function GetParams() {
	let query = useQuery();

	let cat = query.get("cat");
	let id = query.get("id");
	return (
		<>
			<h1>Pega query da rota:</h1>
			<h3>
				rota acessada: {cat} com id: {id}
			</h3>
		</>
	);
}
