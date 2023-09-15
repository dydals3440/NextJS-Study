import classes from './ContactForm.module.css';

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.control}></div>
      </form>
    </section>
  );
}
export default ContactForm;
