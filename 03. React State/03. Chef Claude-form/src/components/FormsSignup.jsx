function FormsSignup() {
  function signUp(formData) {
   
     const email = formData.get("email");
     const password = formData.get("password")
    console.log(email, password);
    
 
  }

  return (
    <>
      <h2>Signup form</h2>
      <form action={signUp}>
        <div>
          <lable htmlFor="email">Email : </lable>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="joe@doue.com"
          />
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
