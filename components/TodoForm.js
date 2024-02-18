import { useRef } from 'react';
import classes from './TodoForm.module.css'

const TodoForm = () => {
    const taskref = useRef()

    const addHandler = (event)=>{
        event.preventDefault();
        console.log(taskref.current.value)
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