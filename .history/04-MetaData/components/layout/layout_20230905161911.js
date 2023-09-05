import { Fragment } from 'react';

import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Notification title='Test' message='This is a test' status='error' />
    </Fragment>
  );
}

export default Layout;
