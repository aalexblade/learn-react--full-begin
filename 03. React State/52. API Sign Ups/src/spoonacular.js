// import dotenv from 'dotenv'
// dotenv.config()

// const API_KEY = process.env.SPOONACULAR_API_KEY
// const BASE_URL = 'https://api.spoonacular.com/recipes'

// export async function getRecipesByIngredients(ingredientsArr, number = 5) {
//     const ingredients = ingredientsArr.join(',')
//     const url = `${BASE_URL}/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=${number}&apiKey=${API_KEY}`

//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         return data
//     } catch (err) {
//         console.error('Error fetching Spoonacular recipes:', err.message)
//     }
// }


