// import { useState } from "react";


function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submited");
    const formData = new FormData(event.currentTarget);
    const newIngridient = formData.get("ingredient");
    ingredients.push(newIngridient)
    console.log(ingredients);
  }



  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingridient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button> Add ingredient</button>
      </form>

      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

export default Main;
