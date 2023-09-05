import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../notification/notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
  useContext(NotificationContext);
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Notification title='Test' message='This is a test' status='error' />
    </Fragment>
  );
}

export default Layout;
