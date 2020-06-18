import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import TodoList from "./todoList";
import Storage from "./storage";
import GetParams from "./getParamsUrl";
import GetQuery from "./getQueryUrl";
import NotFound from "./notFound";

const idLogged = true;

const PrivateRoute = ({ children, ...path }) => {
	return <Route {...path}>{idLogged ? children : <Redirect to="/" />}</Route>;
};

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
						<li>
							<Link to="/query?cat=filmes&id=3">Filmes</Link>
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
				<PrivateRoute path="/query">
					<GetQuery />
				</PrivateRoute>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<hr />
			<footer>Todos direitos reservados...</footer>
		</BrowserRouter>
	);
}
