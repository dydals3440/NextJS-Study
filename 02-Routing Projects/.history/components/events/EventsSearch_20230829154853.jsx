function EventSearch(props) {
  return (
    <form>
      <div>
        <div>
          <label htmlFor='year'>Year</label>
          <select id='year'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div>
          <label htmlFor='month'>Month</label>
          <select id='month'></select>
        </div>
      </div>
    </form>
  );
}

export default EventSearch;
