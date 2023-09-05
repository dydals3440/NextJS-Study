import { useRef, useContext } from 'react';

import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: 'Signing Up',
      message: 'Registering for newsletter',
      status: 'pending',
    });

    // 에러 상태의 HTTP 코드에서도 fetch 함수가 작동한다는 것이 문제, 400 || 500에도 이 프로미스는 정상적으로 작동, 에러상태 코드가 있어도, catch 블록이 제대로 동작하지않음.
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // 정상적으로 작동한다면, 성공을 나타내는 상태 코드!
          return response.json();
        }
        // 문제가 있을시 에러가 있다는것, 응답 데이터도 받고, then 블록에서 에러를 발생시켜 해당 프로미스를 거부 시켜야함. async/await 대신 then, catch
        return response.json().then((data) => {
          throw new Error(data.message || 'something went wrong');
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
          status: 'success',
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: err.message || 'Something went wrong!',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;