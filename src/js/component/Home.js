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

    fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });

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
