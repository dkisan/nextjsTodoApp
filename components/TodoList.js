

const TodoList = (props) => {
    return (
        <ul>
            {props.todolist.map(tl => (
                <li>{tl.task}
                    <button>Mark as Complete</button>
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList