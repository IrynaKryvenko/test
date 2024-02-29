const categoriesAll = document.querySelector("#categories");
const categoriesChild = categoriesAll.children;
const categoriesLength = categoriesChild.length;
console.log(`Number of categories: ${categoriesLength}`);

categoriesChild.forEach((category) => {
    const categoryName = document.querySelector("h2").textContent;
    const categoryElCount = document.querySelectorAll("ul > li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElCount}`);
});

