const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsMap = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add("item");
  return ingredientsLi;
});
ingredientsList.append(...ingredientsMap);