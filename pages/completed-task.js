import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import TodoList from "../components/TodoList";
import styles from '../styles/Home.module.css'


const CompletedTask = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Completed Task</title>
      </Head>
      <div className={styles.main}>
        <h2><u>Completed Task</u></h2>
        <TodoList todolist={props.todo} />
      </div>
    </Fragment>
  )
}




export async function getStaticProps() {


  const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
  const db = client.db();
  const meetupcollection = db.collection('todos')
  const result = await meetupcollection.find({
    completed: true
  }).toArray()
  await client.close()

  return {
    props: {
      todo: result.map((m) => ({
        task: m.task,
        completed: m.completed,
        id: m._id.toString()
      }))
    }
  }
}


export default CompletedTask;