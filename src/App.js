import React from "react";
import Hello from "./hello";
import "./App.css";
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
			<div>{1 + 1}</div>
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
