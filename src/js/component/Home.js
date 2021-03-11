import React, { useState } from "react";

export function Home() {
	const [list, setlist] = useState([]);

	function handleEvent(e) {
		if (e.key === "Enter") {
			setlist([...list, e.target.value]);
		}
	}

	const removeItem = indexItem => {
		setlist(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	return (
		<div className="container">
			<div className="box">
				<h1>Todo</h1>
				<input
					type="text"
					placeholder="What needs to be done?"
					onKeyDown={event => handleEvent(event)}
				/>
				<ul className="list-group list-group-flus">
					{list.map((item, index) => {
						return (
							<li className="list-group-item " key={index}>
								{item}{" "}
								<button
									className="btn btn-danger"
									onClick={() => removeItem(index)}>
									X
								</button>
							</li>
						);
					})}

					<p>{list.length + "   item left"}</p>
				</ul>
			</div>
		</div>
	);
}
