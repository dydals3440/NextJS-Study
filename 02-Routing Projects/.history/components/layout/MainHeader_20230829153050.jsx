import Link from 'next/link';
import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header>
      <Link href='/'>LOGO</Link>
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
