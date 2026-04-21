"use strict";
const playList = [
   {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}];
const container = document.getElementById('container');
const ol = document.createElement('ol');
playList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.author} — ${item.song}`;
    ol.appendChild(li); 
});

container.appendChild(ol);
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
openBtn.onclick = function() {
    modal.style.display = 'block';
};
closeBtn.onclick = function() {
    modal.style.display = 'none';
};
const bulbs = document.querySelectorAll('.bulb');
const nextBtn = document.getElementById('next-btn');

let currentLight = 0; // 0 - червоний, 1 - жовтий, 2 - зелений

nextBtn.onclick = function() {
    bulbs.forEach(bulb => bulb.classList.remove('active'));
    bulbs[currentLight].classList.add('active');
    currentLight++;
    if (currentLight > 2) {
        currentLight = 0;
    }
};

let shoppingList = [];

const grid = document.getElementById('productGrid');
const addBtn = document.getElementById('addBtn');
const totalSpan = document.getElementById('totalSum');
function render() {
    grid.innerHTML = '';
    let totalAll = 0;

    shoppingList.forEach(item => {
        const itemSum = item.price * item.count;
        totalAll += itemSum;
        grid.innerHTML += `
            <div class="product-card">
                <h3>${item.name}</h3>
                <p>Ціна: ${item.price} грн</p>
                <p>Кількість: ${item.count}</p>
                <p class="sum">Сума: ${itemSum} грн</p>
            </div>
        `;
    });
    totalSpan.textContent = totalAll;
}
addBtn.onclick = function() {
    const name = document.getElementById('nameInput').value;
    const price = +document.getElementById('priceInput').value;
    const count = +document.getElementById('countInput').value;

    if (name && price > 0 && count > 0) {
        shoppingList.push({ name, price, count });
        render();
        document.getElementById('nameInput').value = '';
        document.getElementById('priceInput').value = '';
        document.getElementById('countInput').value = '';
    } else {
        alert("Заповніть всі поля коректно!");
    }
};
