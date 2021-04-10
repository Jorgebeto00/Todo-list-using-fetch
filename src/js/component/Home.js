import React, { useState, useEffect } from "react";

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

	// let url = "https://assets.breatheco.de/apis/fake/todos/user/jorgebeto";

	// const newTodoList = () => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify(list);

	// 	var requestOptions = {
	// 		method: "POST",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: "follow"
	// 	};

	// 	fetch(
	// 		"https://assets.breatheco.de/apis/fake/todos/user/jorgebeto",
	// 		requestOptions
	// 	)
	// 		.then(response => response.text())
	// 		.then(result => console.log(result))
	// 		.catch(error => console.log("error", error));
	// };

	// const updateTodoList = () => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify(list);

	// 	var requestOptions = {
	// 		method: "PUT",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: "follow"
	// 	};

	// 	fetch(
	// 		"https://assets.breatheco.de/apis/fake/todos/user/jorgebeto",
	// 		requestOptions
	// 	)
	// 		.then(response => response.text())
	// 		.then(result => console.log(result))
	// 		.catch(error => console.log("error", error));
	// };

	// useEffect(async () => {
	// 	await fetch(url)
	// 		.then(response => {
	// 			if (response.status == 404) {
	// 				newTodoList();
	// 			} else {
	// 				return response.json();
	// 			}
	// 		})
	// 		.then(response => {
	// 			updateTodoList();
	// 			console.log(response);
	// 		})
	// 		.catch(error => {
	// 			// Handle the error
	// 			console.log(error);
	// 		});
	// }, [list]);

	//useEffect(updateTodoList(), []);

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
