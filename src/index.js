import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Aula from "./aulaEffect";
import List from "./components/list";
import TodoList from "./components/todoList";
import Storage from "./components/storage";
ReactDOM.render(
	<React.StrictMode>
		{/* <App teste="fenando" /> */}
		{/* <Aula /> */}
		{/* <List /> */}
		{/* <TodoList /> */}
		<Storage />
	</React.StrictMode>,
	document.getElementById("root")
);
