import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Aula from "./aulaEffect";
import List from "./components/list";
import TodoList from "./components/todoList";
import Storage from "./components/storage";
import Rota from "./components/routes";

/* REDUCERS */
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./reducers";
const store = createStore(Reducers);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App teste="fenando" /> */}
			{/* <Aula /> */}
			{/* <List /> */}
			{/* <TodoList /> */}
			{/* <Storage /> */}
			<Rota />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
