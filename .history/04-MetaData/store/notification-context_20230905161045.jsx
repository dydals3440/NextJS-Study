import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notificationData) {
    setActiveNotification({
      title: notificationData.title,
    });
  }

  function hideNotificationHandler() {}

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;