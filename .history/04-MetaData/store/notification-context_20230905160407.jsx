import { createContext } from 'react';

createContext({
  notification: null, //{ title, message, status }
  showNotification: function () {},
  hideNotification: function () {},
});