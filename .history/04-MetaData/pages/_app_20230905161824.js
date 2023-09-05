import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { NotificationContextProvider } from '../store/notification-context';
import Notification from '../components/notification/notification';

function MyApp({ Component, pageProps }) {
  const notificationCtx = useContext(contextValue);
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
          {/* 이 메타 태그는 반응형 페이지의 스케일을 적정값으로 만들어주는 자주 사용하는 태그! */}
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
        <Notification title='Test' message='This is a test' status='error' />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
