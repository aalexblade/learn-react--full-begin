import React from "react";

//3==================== Conditional Rendering

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
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Main;

//3==================== Conditional Rendering

// function Main() {
//   const [ingredients, setIngredients] = React.useState([]);

//   const ingredientsListItems = ingredients.map((ingredient) => {
//     return <li key={ingredient}>{ingredient}</li>;
//   });

//   function addIngredient(formData) {
//     const newIngridient = formData.get("ingredient");
//     setIngredients((prevIngr) => [...prevIngr, newIngridient]);
//     console.log(ingredients);
//   }

//   return (
//     <main>
//         <form action={addIngredient} className="add-ingredient-form">
//             <input
//                 type="text"
//                 placeholder="e.g. oregano"
//                 aria-label="Add ingredient"
//                 name="ingredient"
//             />
//             <button>Add ingredient</button>
//         </form>
// { ingredients.length > 0 && <section >
//             <h2>Ingredients on hand:</h2>
//             <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
//             <div className="get-recipe-container">
//                 <div>
//                     <h3>Ready for a recipe?</h3>
//                     <p>Generate a recipe from your list of ingredients.</p>
//                 </div>
//                 <button>Get a recipe</button>
//             </div>
//         </section>}
//     </main>
// )
// }

// 2=====================add useState======================================

// function Main() {
//   const [ingredients, setIngredients] = React.useState([]);

//   const ingredientsListItems = ingredients.map((ingredient) => {
//     return <li key={ingredient}>{ingredient}</li>;
//   });

//   function addIngredient(formData) {
//     const newIngridient = formData.get("ingredient");
//     setIngredients((prevIngr) => [...prevIngr, newIngridient]);
//     console.log(ingredients);
//   }

//   return (
//     <main>
//       <form action={addIngredient} className="add-ingridient-form">
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

// 1===============Default state(locale state)=====================================

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
