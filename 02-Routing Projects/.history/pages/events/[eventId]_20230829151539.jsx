import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
}

export default EventDetailPage;
