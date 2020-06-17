import React from "react";
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
