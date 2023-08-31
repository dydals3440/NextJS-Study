import { useEffect } from 'react';

function LastSalesPage() {
  useEffect(() => {
    fetch('../data/dummy-backend.json');
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
