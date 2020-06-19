import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Aula from "./aulaEffect";
import List from "./components/list";
import TodoList from "./components/todoList";
import Storage from "./components/storage";
import Rota from "./components/routes";

/* REDUCERS */
import { store, persistor } from "./components/reduxPersist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* <App teste="fenando" /> */}
				{/* <Aula /> */}
				{/* <List /> */}
				{/* <TodoList /> */}
				{/* <Storage /> */}
				<Rota />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
