// import { useState } from "react";

import React from "react";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngridient = formData.get("ingredient");
    setIngredients((prevIngr) => [...prevIngr, newIngridient]);
    console.log(ingredients);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingridient-form">
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

// function Main() {
//   const ingredients = ["Chicken", "Oregano", "Tomatoes"];

//   const ingredientsListItems = ingredients.map((ingredient) => {
//     return <li key={ingredient}>{ingredient}</li>;
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("form submited");
//     const formData = new FormData(event.currentTarget);
//     const newIngridient = formData.get("ingredient");
//     ingredients.push(newIngridient)
//     console.log(ingredients);
//   }

//   return (
//     <main>
//       <form onSubmit={handleSubmit} className="add-ingridient-form">
//         <input
//           type="text"
//           placeholder="e.g. oregano"
//           aria-label="Add ingredient"
//           name="ingredient"
//         />
//         <button> Add ingredient</button>
//       </form>

//       <ul>{ingredientsListItems}</ul>
//     </main>
//   );
// }
