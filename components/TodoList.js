import classes from './TodoList.module.css'

const TodoList = (props) => {
    return (
        <ul className={classes.u}>
            {props.todolist.map(tl => (
                <li key={tl.id}>{tl.task}
                    <div>
                        <button className={classes.cmp}>Mark as Complete</button>
                        <button className={classes.dl}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList