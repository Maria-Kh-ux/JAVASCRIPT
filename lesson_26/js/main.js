"use strict";

let age = +prompt ("Скільки тобі років?");

if (isNaN(age) || age < 0 || age > 120) {
    alert("Помилка! Будь ласка, введіть коректне число (від 0 до 120).");
} else {
    if (age <= 11) {
        alert("Ви — дитина");
    } else if (age <= 17) {
        alert("Ви — підліток");
    }
   else if (age <= 59) {
        alert("Ви — дорослий");
    }
    else if (age >= 60) {
        alert("Ви — пенсіонер");
    }
}

let symbolNumber = +prompt("Введи число 0-9");

switch (symbolNumber) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
   case 4:
        alert("$");
        break;  
   case 5:
        alert("%");
        break;  
   case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;   
  case 8:
        alert("*");
        break;   
  case 9:
        alert("(");
        break;   
    case 0:
        alert(")");
        break;        
    default:
        alert("Це не цифра від 0 до 9!");
}

let start = +prompt("Введіть початок діапазону:");
let end = +prompt("Введіть кінець діапазону:");
let sum = 0;
for (let i = start; i <= end; i++){
    sum += i;
}
alert(`Сума всіх чисел від ${start} до ${end} дорівнює ${sum}`);

let num1 = +prompt("Перше число:");
let num2 = +prompt("Друге число:");
let gcd = 1; 
let min = num1 < num2 ? num1 : num2;

for (let i = min; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
        break;
    }
}
alert(`НСД чисел ${num1} та ${num2} це: ${gcd}`);

"use strict";

let divisorNumber = +prompt("Введіть число, щоб знайти всі його дільники:");
let divisors = "";

for (let i = 1; i <= divisorNumber; i++) {
    if (divisorNumber % i === 0) {
        divisors += i + " "; 
    }
}
alert(`Дільники числа ${divisorNumber}: ${divisors}`);

let num = prompt("Введи п'ятизначне число:");
let reversedNum = num.split('').reverse().join('');

if (num === reversedNum) {
    alert("Це паліндром!");
} else {
    alert("Це не паліндром.");
}

let purchaseAmount = +prompt("Введіть суму покупки:");
let finalAmount = 0;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    finalAmount = purchaseAmount * 0.97;
    alert(`Твоя знижка 3%. До сплати: ${finalAmount.toFixed(2)}`);
} 
else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    finalAmount = purchaseAmount * 0.95;
    alert(`Твоя знижка 5%. До сплати: ${finalAmount.toFixed(2)}`);
} 
else if (purchaseAmount >= 500) {
    finalAmount = purchaseAmount * 0.93;
    alert(`Твоя знижка 7%. До сплати: ${finalAmount.toFixed(2)}`);
} 
else {
    alert(`Знижки немає. До сплати: ${purchaseAmount}`);
}
let positive = 0, negative = 0, zeros = 0;
let even = 0, odd = 0;

for (let i = 1; i <= 10; i++) {
    let n = +prompt(`Введіть число №${i}:`);

    if (n > 0) {
        positive++;
    } else if (n < 0) {
        negative++;
    } else {
        zeros++;
    }

    if (n % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

alert(`Статистика:
Додатніх: ${positive}
Від'ємних: ${negative}
Нулів: ${zeros}
Парних: ${even}
Непарних: ${odd}`);

"use strict";

const DAYS = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let i = 0;
let wantNext = true;

while (wantNext) {
    wantNext = confirm(`${DAYS[i]}. Хочеш побачити наступний день?`);
  
    i++;

    if (i === 7) {
        i = 0;
    }
}