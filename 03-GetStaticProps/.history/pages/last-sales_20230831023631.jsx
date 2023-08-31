import { useEffect } from 'react';

function LastSalesPage() {
  useEffect(() => {
    fetch('../data/dummy-backend.json').then((res) => console.log(res));
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
