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
        {clients.map((client) => (
          <li>
            <Link href={`${client.id}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
