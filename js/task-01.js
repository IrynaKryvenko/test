const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const titleCategoriesRef = document.querySelectorAll("h2");
titleCategoriesRef.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`);
})