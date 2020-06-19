import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function ReducerFile(props) {
	const handleFernando = () => {
		props.setName("Fernando");
	};
	const handleAdd = () => {
		props.setCount(props.contador + 1);
	};

	return (
		<>
			<h3>
				Nome: {props.name} <br />
				Contagem: {props.contador}
				<button onClick={handleFernando}>Setar nome para Fernando</button>
				<button onClick={handleAdd}>Add contagem</button>
			</h3>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		name: state.usuario.name,
		contador: state.usuario.contador,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (newName) =>
			dispatch({
				type: "SET_NAME",
				payload: { name: newName },
			}),
		setCount: (newNumber) =>
			dispatch({
				type: "SET_COUNT",
				payload: { contador: newNumber },
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReducerFile);
