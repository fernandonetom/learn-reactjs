import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ReducerFile(props) {
	const name = useSelector((state) => state.usuario.name);
	const contador = useSelector((state) => state.usuario.contador);

	const dispatch = useDispatch();

	const handleFernando = () => {
		dispatch({
			type: "SET_NAME",
			payload: { name: "Fernando" },
		});
	};
	const handleAdd = () => {
		dispatch({
			type: "SET_COUNT",
			payload: { contador: contador + 1 },
		});
	};

	return (
		<>
			<h3>
				Nome: {name} <br />
				Contagem: {contador}
				<button onClick={handleFernando}>Setar nome para Fernando</button>
				<button onClick={handleAdd}>Add contagem</button>
			</h3>
		</>
	);
}

export default ReducerFile;
