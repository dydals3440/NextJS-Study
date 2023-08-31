import { useEffect, useState } from 'react';
import useSWR from 'swr';

// client side
function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [isLoading, setIsLoading] = useState(false);
  const { data, error } = useSWR(
    'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
  );
  console.log(data);
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
  }, []);

  if (!data || !sales) {
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
export default LastSalesPage;
