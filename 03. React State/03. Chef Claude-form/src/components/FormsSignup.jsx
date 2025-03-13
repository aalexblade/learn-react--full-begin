function FormsSignup() {
  return (
    <>
      <h2>Signup form</h2>
      <form>
        <div>
          <lable htmlFor="email">Email : </lable>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="joe@doue.com"
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="*********"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default FormsSignup;
