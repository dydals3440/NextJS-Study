import { useState } from 'react';
import classes from './ContactForm.module.css';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  function sendMessageHandler(e) {
    e.preventDefault();
    // add client-side validation (required 속성으로 이미함)
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  }
  return (
    <section className={classes.contact} onSubmit={sendMessageHandler}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              row='5'
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
