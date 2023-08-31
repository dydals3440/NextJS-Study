import { useRouter } from 'next/router';

function FilteredEventsPage() {
  const router = useRouter();
  // 컴포넌트가 처음 렌더링될떄는, URL 데이터에 대한 엑세스가 없음.
  const filterData = router.query.slug;
  if (!filterData) {
  }
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEventsPage;
