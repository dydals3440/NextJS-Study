import { useRef } from 'react';
function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Your Email Address</label>
          <textarea rows='5' id='feedback' />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
