import { useEffect, useState } from 'react';
import useSWR from 'swr';

// client side
function LastSalesPage(props) {
  // 여기다 props.sales를 초기값으로 주면 CS 데이터 페칭의 결과를 덮어씀 초기에는 getStaticProps로 붙어 얻은 sales상태를씀
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);
  ();
  const { data, error } = useSWR(
   'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  // || => &&로 변경 개발자도구에서, 이제 스크립트에 초기정보를 갖고있음! SEO 향상 데이터가 변경될시 클라이언트 페치를하고, 처음에는 정적
  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p> Failed to load</p>;
  }

  //   // react에서 useEffects는 모든 컴포넌트의 최초 평가와 렌더링을 마친 뒤 실행되도록 설계되어있음.
  //   // 첫 렌더링 사이클에서는 sales가 정의되지 않았으니 false가 됨
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const transformsSales = [];
  //         for (const key in data) {
  //           transformsSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSales(transformsSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  // useEffect의 실행 사이클에 의해, 처음 렌더링될떄 sales의 상태는 undefined이기 때문에 map error // getserversideprops를 사용하지않으면 Next.js에서 기본 페이지를 사전 렌더링하기 떄문에 개발자도구에서 Nodatayet이 적혀있는것을 확인할 수 있음. 여기서 중요한점은 이 페이지에 사용된 데이터는 Next.js에서 getStaticProps같은 함수로 준비한 것이 아니기 떄문에, Next.js에서 페이지를 사전 렌더링할떄 useEffect를 거치지 않는다는 점이다.
  //   if (!sales) {
  //     return <p>No data yet</p>;
  //   }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

// gestStaticProps를 써서, 빌드 프로세스 중에 사전생성하고, 배포가 끝나면 revalidate 키로 유효성 재검사 실행
// React Component가 아니기 때문에 useSWR 사용 X
// 대신 fetch()는 getStaticProps와 getServerSideProps에서 모두 쓰임 Next.js덕분에 서버측인 이 콘텍스트에서 사용할 수 있다. 이전처럼 작성하면 된다.
// 응답 구문 분석, 데이터 변형 데이터 변환이 완료되면 for 루프 다음에 무엇을해야할까요? getStaticProps가 비동기함수라는점을 중요하게 여겨야한다. 그래서 프로미스가 끝에 있어야 하는데 두번째 then 블럭에서 객체를 반환해야한다.
export async function getStaticProps() {
  // return을 해주거나 await을 해주어야함, 그래야 모든 단계 및 최종 데이터를 가지는 전체 promise가  getStaticProps로 반환된다. return fetch / (115: 4:20)
  const response = await fetch(
    'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
  );
  const data = await response.json();
  const transformsSales = [];
  for (const key in data) {
    transformsSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transformsSales }, revalidate: 10 };
}

export default LastSalesPage;
