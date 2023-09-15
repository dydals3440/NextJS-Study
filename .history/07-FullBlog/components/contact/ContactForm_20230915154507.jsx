import { useState } from 'react';
import classes from './ContactForm.module.css';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  function sendMessageHandler(e) {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
    });
  }
  return (
    <section className={classes.contact} onSubmit={sendMessageHandler}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea id='message' row='5'></textarea>
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
