function FormTextariaChackBox() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestriction = formData.getAll("dietaryRestructions");
    const favColor = formData.get("favColor");
    console.log(favColor);
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
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </lable>
        </fieldset>
        <br />

        <fieldset>
          <legend>Dietary restructions:</legend>
          <lable>
            <input type="checkbox" name="dietaryRestructions" value="kosher" />
            Kosher
          </lable>
          <lable>
            <input type="checkbox" name="dietaryRestructions" value="vegan" />
            Vegan
          </lable>
          <lable>
            <input
              type="checkbox"
              name="dietaryRestructions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </lable>
        </fieldset>
        <br />

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="green">Grey</option>
          <option value="indigo">Ingigo</option>
          <option value="violet">Violet</option>
        </select>

        <br />

        <button>Submit</button>
      </form>
    </>
  );
}

export default FormTextariaChackBox;
