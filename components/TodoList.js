import classes from './TodoList.module.css'

const TodoList = (props) => {
    const setComplete = (event) => {
        const id = event.target.parentElement.getAttribute('id')
        props.setComplete(id)
    }
    return (
        <ul className={classes.u}>
            {props.todolist.map(tl => (
                <li key={tl.id}>{tl.task}
                    <div id={tl.id}>
                        {!tl.completed && <button onClick={setComplete} className={classes.cmp}>Mark as Complete</button>}
                        <button className={classes.dl}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList