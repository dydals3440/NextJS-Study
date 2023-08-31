import { useEffect } from 'react';

function LastSalesPage() {
  useEffect(() => {
    fetch(
      'https://react-http-28b62-default-rtdb.asia-southeast1.firebasedatabase.app/'
    ).then((res) => console.log(res));
  }, []);
  return <ul></ul>;
}
export default LastSalesPage;
