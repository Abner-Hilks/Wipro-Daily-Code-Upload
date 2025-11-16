window.onload = function() {

const favoriteFoods = ["Pav Bhaji", "Pizza", "Pasta", "Biryani", "Samosa"];

const list = document.getElementById("foodList");

favoriteFoods.forEach(food => 
    {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    list.appendChild(listItem);
    });
};