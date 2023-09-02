import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* Network에서 캐시를 삭제하고, 다시 리로드하면 이미지 유형이 webp로 바뀌고, 이미지에는 영향을 미치지않고, 용량만 줄어듬! 품질차이는 눈으로 거의 구분이 어려움. Next.js의 이미지 최적화기능! 생성된 이미지는 Next의 이미지 폴더에 있음. 요청에 있을떄 생성하고 저장해둠! 바로 이미지 꺼내서 렌더링하는 방식, 바로 생성된 이미지 그 자체임, 작은 화면에서 새로고침하고 Lazy Loading 보이지 않은 상태에서는 Next.js가 다운로드 하지않음. */}
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
