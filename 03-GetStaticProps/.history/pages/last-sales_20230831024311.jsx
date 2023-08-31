import { useEffect, useState } from 'react';

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);
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

  return <ul></ul>;
}
export default LastSalesPage;
