import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <Link href='/'>LOGO</Link>
      <nav>
        <ul>
          <li>
            <Link>All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
