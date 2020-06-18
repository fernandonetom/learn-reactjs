import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TodoList from "./todoList";
import Storage from "./storage";
import GetParams from "./getParamsUrl";
export default function Rota() {
	return (
		<BrowserRouter>
			<header>
				<h1>Meu site top</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/sobre">Sobre</Link>
						</li>
						<li>
							<Link to="/categorias/esportes/3">Esportes</Link>
						</li>
						<li>
							<Link to="/categorias/filmes/5">Filmes</Link>
						</li>
					</ul>
				</nav>
			</header>
			<hr />
			<Switch>
				<Route exact path="/">
					<TodoList />
				</Route>
				<Route path="/sobre">
					<Storage />
				</Route>
				<Route path="/categorias/:cat/:id">
					<GetParams />
				</Route>
			</Switch>
			<hr />
			<footer>Todos direitos reservados...</footer>
		</BrowserRouter>
	);
}
