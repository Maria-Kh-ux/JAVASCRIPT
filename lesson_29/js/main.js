"use strict";
let shoppingList = [
    { name: "Молоко", count: 2, isBought: false, price: 35, sum: 70 },
    { name: "Хліб", count: 1, isBought: true, price: 20, sum: 20 },
    { name: "Сир", count: 1, isBought: false, price: 120, sum: 120 },
    { name: "Яблука", count: 3, isBought: true, price: 15, sum: 45 }
];
function showList(list) {
    let sortedList = [...list].sort((a, b) => a.isBought - b.isBought);
    console.log("--- Список покупок ---");
    sortedList.forEach(item => {
        let status = item.isBought ? "[V] Куплено" : "[ ] Треба купити";
        console.log(`${status} | ${item.name} | К-сть: ${item.count} | Ціна: ${item.price} | Сума: ${item.sum}`);
    });
}
function buyProduct(name) {
    let product = shoppingList.find(item => item.name === name);

    if (product) {
        product.isBought = true;
        console.log(`Ви купили: ${name} ✅`);
    } else {
        console.log(`Помилка: ${name} не знайдено в списку.`);
    }
}
showList(shoppingList);
buyProduct("Молоко");
showList(shoppingList);
function deleteProduct(name) {
    shoppingList = shoppingList.filter(item => item.name !== name);
    console.log(`--- Продукт "${name}" видалено зі списку ---`);
}
deleteProduct("Сир");
showList(shoppingList);
function addProduct(name, count, price) {
    let existingProduct = shoppingList.find(item => item.name === name);
 if (existingProduct) {
        existingProduct.count += count;
        existingProduct.sum = existingProduct.count * existingProduct.price;
        console.log(`Кількість товару "${name}" збільшено до ${existingProduct.count}`);
    } else {
        let newProduct = {
            name: name,
            count: count,
            isBought: false,
            price: price,
            sum: count * price
        };
        shoppingList.push(newProduct);
        console.log(`Товар "${name}" додано до списку`);
    }
}
addProduct("Молоко", 3, 35); 
addProduct("Печиво", 2, 25);
showList(shoppingList);

