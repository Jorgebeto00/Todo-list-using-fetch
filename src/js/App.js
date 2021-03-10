import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import TodoForm from "./component/TodoForm";
// import TodoList from "./component/TodoList";

// function App() {
// 	const [todos, setTodos] = useState([]);

// 	function addTodo(todo) {
// 		setTodos([todo, ...todos]);
// 	}

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>Todo</h1>
// 				<TodoForm addTodo={addTodo} />
// 			</header>
// 		</div>
// 	);
// }

const initialList = [
	{
		id: "a",
		name: "Robin"
	},
	{
		id: "b",
		name: "Dennis"
	}
];

const App = () => {
	const [list, setList] = React.useState(initialList);
	const [name, setName] = React.useState("");

	function handleChange(event) {
		setName(event.target.value);
	}

	function handleAdd() {
		const newList = list.concat({ name, id: uuidv4() });

		setList(newList);

		setName("");
	}

	return (
		<div>
			<AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

			<List list={list} />
		</div>
	);
};

const AddItem = ({ name, onChange, onAdd }) => (
	<div>
		<input type="text" value={name} onChange={onChange} />
		<button type="button" onClick={onAdd}>
			Add
		</button>
	</div>
);

const List = ({ list }) => (
	<ul>
		{list.map(item => (
			<li key={item.id}>{item.name}</li>
		))}
	</ul>
);

export default App;
