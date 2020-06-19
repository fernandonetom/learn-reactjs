import React from "react";
import { connect } from "react-redux";
function Redux2(props) {
	const handleJoao = () => {
		props.setName("João");
	};
	const handleDecrement = () => {
		props.contador >= 1 && props.setCount(props.contador - 1);
	};
	return (
		<>
			<h3>Olá: {props.name}</h3>
			<h4>Sua contagem é: {props.contador}</h4>
			<br />
			<button onClick={handleJoao}>Setar nome para João</button>
			<button onClick={handleDecrement}>Decrement count</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Redux2);
