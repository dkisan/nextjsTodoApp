import { Fragment } from "react";
import TodoForm from "../components/TodoForm";
import Head from "next/head";
import { useRouter } from "next/router";

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
            <TodoForm addTodo={addTodo} />
        </Fragment>
    )
}

export default NewTask;