import Link from 'next/link';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* a태그의 단점: 새페이지를 불러오기 위해 HTTP 요청을 보낼때 발생, 새 요청으로 새 HTML 페이지를 받음 성능상의 문제 앱에 머무르며(app-wide) 상태를 유지해야함. */}
          {/* 1. 백엔드에 HTTP 요청 안보내고, 2. 앱 상태가 바뀌지않음. 3. 마우스를 갖다대면 미리 페이지를 페칭해오는 꼼수가 있음 (최적화) */}
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
