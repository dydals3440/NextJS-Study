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
export async function getStaticProps(context) {
  // context 객체의 프로퍼티 중 하나!
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
}

export default ProductDetailPage;

// 컴포넌트 함수는 useParams을 통해 params을 추출하고, getStaticProps 함수안에서는 context를 통해 추출하는 이유!
// 컴포넌트 함수에서 매개변수를 추출하면, 컴포넌트 내부에서 사용이 가능하다. 추출된 ID를 사용하거나 일부 백엔드 서버에 요청을 보내 거기에 페칭함. 이 과정은 브라우저에서만 일어난다는게 중요하다.
// getStaticProps을 통해, 페이지를 사전에 렌더링하게 되면 이 경우는 서버에서 이루어진다. 이전에 설명했듯이 getStaticProps는 컴포넌트 함수가 렌더링되기 이전에 페이지를 사전에 실행되는 함수라서 그렇다.
