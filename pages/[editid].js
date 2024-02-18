import { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";


const EditTask = (props) => {
    const taskref = useRef("")
    const router = useRouter()
    useEffect(() => {
        taskref.current.value = props.todo.task
    },[])

    const updateHandler = async (event) => {
        event.preventDefault()
        const obj = {
            id: props.todo.id,
            task: taskref.current.value
        }
        const response = await fetch(`/api/${props.todo.id}`, {
            method: "PUT",
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log(data)
        router.push('/')

    }

    return (
        <Fragment>
            <Head>
                <title>Edit Task</title>
            </Head>
            <div className={styles.main}>
                <form>
                    <label>Task :</label>
                    <input type="text" ref={taskref} />
                    <button onClick={updateHandler}>Update Task</button>
                </form>
            </div>
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const todocollection = db.collection('todos')
    const result = await todocollection.find({}, { _id: 1 }).toArray()
    await client.close()

    return {
        fallback: false,
        paths: result.map(m => ({
            params: { editid: m._id.toString() }
        }))
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.editid
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const todocollection = db.collection('todos')
    const selectedResult = await todocollection.findOne({ _id: new ObjectId(id) })
    await client.close()

    return {
        props: {
            todo: {
                id: selectedResult._id.toString(),
                task: selectedResult.task
            }
        }
    }

}

export default EditTask;