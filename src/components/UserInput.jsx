function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input type="number" id="investment" required />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input type="number" id="annual" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" id="return" required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" required />
        </p>
      </div>
    </section>
  );
}

export default UserInput;