function HomePage() {
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
          <textarea type='text' id='feedback' />
        </div>
      </form>
    </div>
  );
}

export default HomePage;
