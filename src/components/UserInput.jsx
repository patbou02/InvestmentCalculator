function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="investment">Initial Investment
        <input type="text" id="investment" /></label>
        <label htmlFor="annual">Annual Investment
        <input type="text" id="annual" /></label>
      </div>
      <br />
      <div className="input-group">
        <label htmlFor="return">Expected Return
        <input type="text" id="return" /></label>
        <label htmlFor="duration">Duration
        <input type="text" id="duration" /></label>
      </div>
    </div>
  );
}

export default UserInput;