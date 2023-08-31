import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <Link href='/'>LOGO</Link>
      <nav>
        <ul>
          <li>
            <Link>123</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
