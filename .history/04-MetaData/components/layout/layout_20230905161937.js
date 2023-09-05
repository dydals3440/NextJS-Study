import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../notification/notification';

function Layout(props) {
  useContext();
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Notification title='Test' message='This is a test' status='error' />
    </Fragment>
  );
}

export default Layout;