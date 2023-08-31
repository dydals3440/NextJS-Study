import { Fragment } from 'react';

function ProductDetailPage() {
  // useEffect를 사용시 문제점, 상품 데이터를 제공할 서버에 HTTP d요청을할 수 있지만, 페이지가 처음 렌더링 되어 데이터가 없을시에, SE이 볼 수 없음.
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </Fragment>
  );
}

// context 파라미터를 통해서, 구체적인 매개변수의 값을 구할 수 있다. 경로상의 동적 세그먼트에 대한 구체적인 값을 알 수 있다.
export async function getStaticProps(context) {}

export default ProductDetailPage;
