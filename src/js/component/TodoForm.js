import React, { useState } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

function TodoForm({ addTodo }) {
	const [todo, setTodo] = useState({
		id: "",
		task: ""
	});

	function handleTaskInputChange(e) {
		setTodo({ ...todo, task: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuid.v4() });
			//reset task input
			setTodo({ ...todo, task: "" });
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="task"
				type="text"
				value={todo.task}
				onChange={handleTaskInputChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
}

TodoForm.propTypes = {
	todo: PropTypes.string,
	addTodo: PropTypes.array
};

export default TodoForm;
