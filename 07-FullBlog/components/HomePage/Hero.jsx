import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* 퍼블릭 폴더의 콘텐츠는 웹사이트 실행에 있어, 루트 수준에서 이미 공개된 경로였기 떄문에 public을 경로로 지정해서는 안된다 */}
        <Image
          src='/images/site/max.png'
          alt='Image Matthew'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Matthew</h1>
      <p>
        I blog about web development - especially frontend frameworks like react
      </p>
    </section>
  );
}

export default Hero;
