import { useEffect, useState } from 'react';

function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setSales;
      });
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
