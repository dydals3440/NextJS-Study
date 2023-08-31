import Link from 'next/link';

function EventItem(props) {
  return (
    <li>
      <img src='' alt='' />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>DATE</time>
          </div>
        </div>
        <div>
          <address>ADDRESS</address>
        </div>
      </div>
      <div>
        <Link href='/'>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
