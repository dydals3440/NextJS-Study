import Image from 'next/image';
import Link from 'next/link';

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  return (
    <li>
      <Image src='' alt='' />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href='/'>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
