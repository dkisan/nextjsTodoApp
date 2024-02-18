import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'
import { MongoClient } from 'mongodb';

export default function Home(props) {

  const completeHandler = async (id) => {
    const response = await fetch('/api/', {
      method: "PUT",
      body: JSON.stringify({
        id: id
      })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2><u>Today</u></h2>
      <div className={styles.main}>
        <TodoList todolist={props.todo} setComplete={completeHandler} />
      </div>
    </div>
  )
}

export async function getStaticProps() {


  const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
  const db = client.db();
  const meetupcollection = db.collection('todos')
  const result = await meetupcollection.find({
    completed:false
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
