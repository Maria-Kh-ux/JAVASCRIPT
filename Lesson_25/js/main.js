"use strict";

let result = 0.1 + 0.2;
console.log(+result.toFixed(1));

let a = "1";
let b = 2;

result = +a + b; 

console.log(result);

const FILE_SIZE_MB = 820;
const MB_IN_GB = 1024; 

let flashDriveGb = prompt("Введіть обсяг флешки у Гб:");
let flashDriveMb = flashDriveGb * MB_IN_GB;
let filesCount = Math.floor(flashDriveMb / FILE_SIZE_MB);

alert(`На флешку обсягом ${flashDriveGb} Гб поміститься ${filesCount} файлів по 820 Мб.`);

let walletBalance = +prompt("Скільки грошей у вас у гаманці?");
let candyPrice = +prompt("Яка ціна однієї шоколадки?");
let candyCount = Math.floor(walletBalance / candyPrice);
let change = walletBalance % candyPrice;
alert(`Ви можете купити ${candyCount} шт., ваша решта: ${change.toFixed(2)} грн.`);


let number = +prompt("Введіть тризначне число (наприклад, 123):");

let units = number % 10;

let tens = Math.floor(number / 10) % 10;

let hundreds = Math.floor(number / 100);

let reversedNumber = units * 100 + tens * 10 + hundreds;

alert(`Число задом наперед: ${reversedNumber}`);



