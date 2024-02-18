import { Fragment } from "react";
import TodoForm from "../components/TodoForm";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'


const NewTask = () => {
    const router = useRouter()

    const addTodo = async (d) => {
        const response = await fetch('/api/new-task', {
            method: "POST",
            body: JSON.stringify(d)
        })
        const data = await response.json()
        console.log(data)
        router.push('/')
    }
    return (
        <Fragment>
            <Head>
                <title>New Task</title>
            </Head>
            <div className={styles.main}>
                <TodoForm addTodo={addTodo} />
            </div>
        </Fragment>
    )
}

export default NewTask;