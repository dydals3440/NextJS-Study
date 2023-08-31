import path from 'path';
import fs from 'fs/promises'; // CS 번들에서, 이 임포트를 제거함 클라이언트 사이드 코드 브라우저 측 리액트 앱 코드가 준비될때까지 이 임포트는 사라짐. Client side에서 사용하지 않음을 이해함.

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// Next.js가 이것을 먼저 호출함
export async function getStaticProps() {
  // current working directory
  // 페이지 실행시, 모든 파일이 root 프로젝트 폴더에 있는 것처럼 취급
  // pages 폴더가 아닌, 전체 프로젝트 폴더라는걸 아는게 중요
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  return {
    props: {
      products: [
        { id: 'p1', title: 'Product 1' },
        { id: 'p2', title: 'Product 2' },
        { id: 'p3', title: 'Product 3' },
      ],
    },
  };
}

export default HomePage;

// 페이지가 로드된 후에만 CS에서 전송되는 HTTP 요청 대신, 컴포넌트를 생성하기 전에 그리고 Next.js가 이 컴포넌트 페이지를 사전 렌더링 하기 전에 데이터를 미리 fetching을 해야한다.
