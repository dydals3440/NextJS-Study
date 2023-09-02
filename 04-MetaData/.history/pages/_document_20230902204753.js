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
// App 컴포넌트 트리 외부에 추가적인 HTML 요소가 있는게 도움이 될 수 있다. Next.js 앱은 결국 반드시 포함되어야 하는 이 메인 컴포넌트에 의해 렌더링 되지만, 추가 요소를 더하는 것이 이점이 많을 떄가 있음.
