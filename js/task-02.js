const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredietsListRef = document.querySelector("#ingredients");
const itemsRef = ingredients.map((ingredient) => {
const itemEl = document.createElement("li");
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
}) 
ingredietsListRef.append(...itemsRef);