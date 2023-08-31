import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage() {
  const { data: salesData, error } = useSWR(
    'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
  );

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!salesData) {
    return <p>Loading...</p>;
  }

  const transformedSales = Object.entries(salesData).map(([id, sale]) => ({
    id,
    username: sale.username,
    volume: sale.volume,
  }));

  return (
    <ul>
      {transformedSales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
