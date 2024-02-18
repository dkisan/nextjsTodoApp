import { Fragment } from "react";
import TodoForm from "../components/TodoForm";
import Head from "next/head";

const NewTask = () => {
    return (
        <Fragment>
            <Head>
                <title>New Task</title>
            </Head>
            <TodoForm />
        </Fragment>
    )
}

export default NewTask;