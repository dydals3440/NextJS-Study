import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  // 우리가 상태를 호출할 떄마다, NotificationContextProvider 컴포넌트가 리렌더링 되고, 연관된 컴포넌트에 업데이트 된 context 객체를 배포함
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      (activeNotification && activeNotification.status === 'success') ||
      activeNotification.status === 'error'
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      // 동시에 여러가지 타이머의 실행을 방지
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
