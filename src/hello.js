import React from "react";
export default function Hello(props) {
	return (
		<div>
			Olá {props.name}, você tem {props.age} anos.
		</div>
	);
}
