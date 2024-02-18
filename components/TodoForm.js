import { useRef } from 'react';
import classes from './TodoForm.module.css'

const TodoForm = (props) => {
    const taskref = useRef()

    const addHandler = (event) => {
        event.preventDefault();
        const obj = {
            task: taskref.current.value,
            completed: false
        }
        props.addTodo(obj)
    }

    return (
        <form className={classes.f}>
            <label>Task Name :</label>
            <input ref={taskref} type="text" />
            <button onClick={addHandler} className={classes.add}>Add Task</button>
        </form>
    )
}

export default TodoForm;