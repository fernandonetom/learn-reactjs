import React from "react";
export default function Hello(props) {
	return (
		<div className="avatar">
			Olá {props.name}, você tem {props.age} anos.
		</div>
	);
}
