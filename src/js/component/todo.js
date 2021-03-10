import React, { useState } from "react";

//create your first component
export function Todo() {
    const [inputValue, setInputValue] = useState([]);
    
    let newList = inputValue.map()

	return (
		<div className="container">
			<div className="box">
				<div className="todos-title">todos</div>
				<input
					className="todoBar d-flex justify-content-center"
					type="text"
				/>
				<ul className="list">
					<li>x</li>
				</ul>
			</div>
		</div>
	);
}
