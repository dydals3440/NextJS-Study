import { createContext } from 'react';

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function () {},
  hideNotification: function () {},
});

function NotificationContextProvider() {
  return <NotificationContext.Provider></NotificationContext.Provider>;
}

export default NotificationContext;
