import React, { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		setTodos([todo, ...todos]);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo</h1>
				<TodoForm addTodo={addTodo} />
			</header>
		</div>
	);
}

export default App;
