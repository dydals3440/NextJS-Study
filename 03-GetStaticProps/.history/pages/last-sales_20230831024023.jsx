import { useEffect, useState } from 'react';

function LastSalesPage() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch(
      'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
    )
      .then((res) => res.json())
      .then((data) => {});
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
