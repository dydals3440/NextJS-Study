import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  //   function showNotificationHandler(notificationData) {
  //     setActiveNotification(notificationData);
  //   }

  //   function hideNotificationHandler() {
  //     setActiveNotification(null);
  //   }

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
