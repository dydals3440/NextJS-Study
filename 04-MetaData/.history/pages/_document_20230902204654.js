// 전체 HTML 문서를 구성하는 모든 요소룰 커스터마이징할 수 있게함.
// _doucment.js 파일을 생성하면됨
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head />
        <body>
          <div id='overlays'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// 이렇게 해야 HTML 컨텐츠를 애플리케이션 컴포넌트 트리 외부에 추가할 수 있게 해줌, React Portal과 같이 사용할떄!
