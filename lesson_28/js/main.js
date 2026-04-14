"use strict";

let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    avgSpeed: 90,
    fuelTank: 60,
    fuelConsumption: 8,
    drivers: ["Олексій"],

    showInfo: function() {
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік: ${this.year}`);
        console.log(`Водії: ${this.drivers.join(", ")}`);
    },

    addDriver: function(newName) {
        this.drivers.push(newName);
    },

    checkDriver: function(name) {
        if (this.drivers.includes(name)) {
            console.log(`Водій ${name} є у списку.`);
        } else {
            console.log(`Водія ${name} немає у списку.`);
        }
    },

    calculateTrip: function(distance) {
        let pureTime = distance / this.avgSpeed;
        let breaks = Math.floor(pureTime / 4);

        if (pureTime % 4 === 0 && breaks > 0) {
            breaks--;
        }

        let totalTime = pureTime + breaks;
        let fuelNeeded = (distance / 100) * this.fuelConsumption;

        console.log(`--- Поїздка на ${distance} км ---`);
        console.log(`Час у дорозі: ${totalTime.toFixed(1)} год`);
        console.log(`Палива потрібно: ${fuelNeeded.toFixed(1)} л`);
    }
};

// --- ПЕРЕВІРКА ---
car.showInfo();
car.addDriver("Марина");
car.checkDriver("Марина");
car.calculateTrip(450);