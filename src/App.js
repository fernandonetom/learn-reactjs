import React from "react";
import Hello from "./hello";
import "./App.css";
import styled from "styled-components";

export const Card = styled.div`
	background-color: blue;
	font-size: 25px;
	color: white;
	margin: 10px;
`;
export const Botao = styled.button.attrs((props) => ({
	bgColor: props.bgColor || "gray",
}))`
	font-size: 20px;
	padding: 10px 15px;
	border: 0;
	background-color: ${(props) => props.bgColor};
`;
export const BotaoPequeno = styled(Botao)`
	font-size: 10px;
	transition: all ease-in-out 0.3s;
	&:hover {
		background-color: blue;
		cursor: pointer;
	}
`;
/*
  MANEIRA 1
*/
// class App extends React.Component {
// 	render() {
// 		return <h1>Teste</h1>;
// 	}
// }
/*
  MANEIRA 2
*/

function App() {
	const fomartName = (user) => {
		return user.name + " " + user.lastname;
	};

	const user = {
		name: "Fernando",
		lastname: "Neto",
	};

	return (
		<>
			<Hello name="José" age={12} />
			<Hello name="Maria" age={25} />
			<Hello name="João" age={30} />
			<div>{fomartName(user)}</div>
			<Card>{1 + 1}</Card>
			<Botao bgColor="#00FF00">Clique</Botao>
			<BotaoPequeno>Sou pequeno</BotaoPequeno>
		</>
	);
}

/*
  MANEIRA 3
*/
// const App = (props) => {
// 	return <h1>Teste {props.teste}</h1>;
// };
export default App;
