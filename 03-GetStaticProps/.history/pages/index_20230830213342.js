// Next.js는 동적데이터가 아닌 데이터들은 사전 렌더링함.
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
