import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function NotFound() {
	const redirecionado = useHistory();
	const [segundo, setSegundo] = useState(5);
	useEffect(() => {
		setTimeout(() => {
			redirecionado.replace("/");
		}, 5000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setSegundo(segundo - 1);
		}, 1000);
	}, [segundo]);
	return (
		<>
			<h3>Página não encontrada</h3>
			<h5>Você será redirecionado em {segundo} segundos.</h5>
		</>
	);
}
