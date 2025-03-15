function FormTextaria() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");

    console.log(employmentStatus);
  }

  return (
    <>
      <h1>Signup form and textaria</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue={"joe@dou.com"}
          type="email"
          name="email"
          placeholder="joe@dou.com"
        />
        <br />

        <lable htmlFor="password">Password:</lable>
        <input
          id="password"
          defaultValue={"password123"}
          type="password"
          name="password"
          placeholder="**********"
        />
        <br />

        <label htmlFor="description">Discription:</label>
        <textarea
          id="description"
          name="description"
          placeholder="This is a description"
          defaultValue={"This is a description"}
        ></textarea>
        <br />

        <fieldset>
          <legend>Employment Status:</legend>
          <lable>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </lable>
          <lable>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </lable>
          <lable>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </lable>
        </fieldset>
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}

export default FormTextaria;
