import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'

export default function Home(props) {
  // const todo = [
  //   { task: 'task1' },
  //   { task: 'task2' },
  //   { task: 'task3' }
  // ]

  const addtoTodo = (data) => {
    props.todo.push(data)
  }

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
  const todo = [
    { task: 'task1' },
    { task: 'task2' },
    { task: 'task3' }
  ]

  return {
    props: {
      todo: todo
    }
  }
}
