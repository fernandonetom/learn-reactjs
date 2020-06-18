import React, { useState, useEffect } from "react";

function Aula() {
	const [contador, setContador] = useState(0);

	// useEffect(() => {
	// 	document.title = "Muda por qualquer coisa";
	// });

	//MUDA PELO CONTADOR
	useEffect(() => {
		document.title = `Cliclou ${contador}`;
		return () => {
			console.log("PEGA O VALOR ANTIDO");
			alert(`mudou ${contador}x`);
		};
	}, [contador]);
	const aumentar = () => {
		setContador(contador + 1);
	};
	return (
		<>
			<h1>Contagem: {contador}</h1>
			<button onClick={aumentar}>Aumentar</button>
		</>
	);
}

export default Aula;
