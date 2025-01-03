const breakfastMenuItems = [
  "Pancakes",
  "Waffles",
  "French Toast",
  "Omelette",
  "Eggs Benedict",
  "Bacon",
  "Sausage",
  "Toast",
  "Bagel",
  "Muffin",
  "Cereal",
  "Yogurt",
  "Fruit",
  "Smoothie",
  "Coffee",
  "Tea",
  "Juice",
];
const maincourseMenuItems = [
  "Steak",
  "Chicken",
  "Fish",
  "Pasta",
  "Pizza",
  "Burger",
  "Sandwich",
  "Salad",
  "Soup",
  "Taco",
  "Burrito",
  "Sushi",
  "Rice",
  "Potato",
  "Vegetables",
];
const dessertMenuItems = [
  "Cake",
  "Pie",
  "Ice Cream",
  "Cookie",
  "Cupcake",
  "Donut",
  "Brownie",
  "Pudding",
  "Candy",
  "Chocolate",
  "Fruit",
  "Cheesecake",
  "Milkshake",
  "Sundae",
  "Parfait",
  "Cobbler",
];

const breakfastMenuItemsHTML = breakfastMenuItems
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

let mainCourseItem = "";
maincourseMenuItems.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertMenuItem = "";
for (let i = 0; i < dessertMenuItems.length; i++) {
  dessertMenuItem += `<p>Item ${i + 1}: ${dessertMenuItems[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertMenuItem;
