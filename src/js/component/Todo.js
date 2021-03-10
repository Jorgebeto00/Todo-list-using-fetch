import React from "react";
import PropTypes from "prop-types";

function Todo({ todo }) {
	return (
		<div>
			<li>{todo.task}</li>
			<button>X</button>
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.string
};

export default Todo;
