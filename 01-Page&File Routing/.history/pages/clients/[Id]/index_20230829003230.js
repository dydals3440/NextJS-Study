import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Th3 Projects of a Given Client</h1>
      <button>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
