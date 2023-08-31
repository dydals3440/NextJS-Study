import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
    { id: 'matthew', name: 'Matthew' },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href='/clients/max'>Maximilian</Link>
        </li>
        <li>
          <Link href='/clients/matthew'>Matthew</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
