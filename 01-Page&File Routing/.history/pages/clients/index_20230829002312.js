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
        {clients.map(({ id, name }, idx) => (
          <li key={idx}>
            <Link href={`clients/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
