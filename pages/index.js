import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'
import { MongoClient } from 'mongodb';

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>dlfj</h2>
      <div className={styles.main}>
        <TodoList todolist={props.todo} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  

  const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.bfusjly.mongodb.net/nextjs?retryWrites=true&w=majority');
    const db = client.db();
    const meetupcollection = db.collection('todos')
    const result = await meetupcollection.find().toArray()
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
