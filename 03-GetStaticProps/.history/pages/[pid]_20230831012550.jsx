import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

// 이 페이지는 p1, p2 ... p1000까지 많은 페이지를 만들어야할 수도있는데, next.js는 얼마나 많은 페이지를 미리 생성해야하는지 알 수 없다. [pid]에서 어떤 값이 지원되는지 알지 못한다. 대신 서버에서 항상 그때 그때 생성된다. 그래서 이전에는 작동됬지만, 지급은 getStaticProps를 적용한 상태라 안된다. 그래서 Dynamic Route의 경우 Next.js에게 더 많은 정보를 전달해주어야 한다. 어떤 인스턴스가 사전에 생성되야하는지, 어떤 [id]r값이 사용가능한지를  이떄 사용하는 것이 getStaticPaths()이다. Page 컴포넌트 파일에만 추가할 수 있다.

function ProductDetailPage(props) {
  // useEffect를 사용시 문제점, 상품 데이터를 제공할 서버에 HTTP d요청을할 수 있지만, 페이지가 처음 렌더링 되어 데이터가 없을시에, SE이 볼 수 없음.

  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

// context 파라미터를 통해서, 구체적인 매개변수의 값을 구할 수 있다. 경로상의 동적 세그먼트에 대한 구체적인 값을 알 수 있다.
export async function getStaticProps(context) {
  // context 객체의 프로퍼티 중 하나!
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  // 동적페이지의 어떤 instances를 생성할지 next.js에게 알림
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    // fallback 키는 사전 생성되어야 할 페이지가 많을 때 도움이된다. Amazon처럼 상품이 수천만개인 웹사이트를 생각해보자, 모든 상품을 사전 생성하는 것이 좋은 방법은 아닐 것이다. (너무 오랜시간걸림)
    // 수백 개의 게시물이 있는 블로그를 만들어도, 몇개는 아무도 보지않는 게시물이 있을수도 있다. 방문객이 없는 페이지의 사전생상은 시간과 자원 낭비다.
    fallback: false,
  };
}

export default ProductDetailPage;

// 컴포넌트 함수는 useParams을 통해 params을 추출하고, getStaticProps 함수안에서는 context를 통해 추출하는 이유!
// 컴포넌트 함수에서 매개변수를 추출하면, 컴포넌트 내부에서 사용이 가능하다. 추출된 ID를 사용하거나 일부 백엔드 서버에 요청을 보내 거기에 페칭함. 이 과정은 브라우저에서만 일어난다는게 중요하다.
// getStaticProps을 통해, 페이지를 사전에 렌더링하게 되면 이 경우는 서버에서 이루어진다. 이전에 설명했듯이 getStaticProps는 컴포넌트 함수가 렌더링되기 이전에 페이지를 사전에 실행되는 함수라서 그렇다.
