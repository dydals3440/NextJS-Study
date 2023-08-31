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
        setSales(data);
        setIsLoading(false);
      });
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
