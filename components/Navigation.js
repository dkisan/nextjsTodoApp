import Link from 'next/link';
import classes from './Navigation.module.css';

function Navigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Task</Link>
          </li>
          <li>
            <Link href='/completed-task'>Completed Task</Link>
          </li>
          <li>
            <Link href='/new-task'>Add New task</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
