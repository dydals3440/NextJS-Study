import { useEffect, useState } from 'react';

// client side
function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // react에서 useEffects는 모든 컴포넌트의 최초 평가와 렌더링을 마친 뒤 실행되도록 설계되어있음.
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const transformesSales = [];
        for (const key in data) {
          transformesSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformesSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

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
