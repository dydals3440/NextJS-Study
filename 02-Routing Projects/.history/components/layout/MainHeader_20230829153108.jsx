import Link from 'next/link';
import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div>
        <Link href='/'>LOGO</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
