import React, { useState, useEffect } from "react";
import SearchBox from "./search";

export default function TodoList() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		setList([
			{ title: "comprar pão", done: false },
			{ title: "fazer tarefa", done: true },
			{ title: "enviar email", done: false },
		]);
	}, []);

	function saveTodo(text) {
		let newList = [...list, { title: text, done: false }];
		setList(newList);
	}
	function handleToggloDone(index) {
		let changeList = [...list];
		changeList[index].done = !changeList[index].done;
		setList(changeList);
	}
	return (
		<>
			<SearchBox onEnter={saveTodo} />
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item.done && <del>{item.title}</del>}
						{!item.done && item.title}
						<button onClick={() => handleToggloDone(index)}>
							{item.done && "Desmarcar"}
							{!item.done && "Feito"}
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
