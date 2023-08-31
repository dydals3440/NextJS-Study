import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data... (replace는 페이지 이동후에 되돌아가기 x)
    // router.push('/clients/max/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  }
  return (
    <div>
      <h1>Th3 Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
