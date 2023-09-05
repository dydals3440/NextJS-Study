import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler() {}

  function hideNotificationHandler() {}

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;