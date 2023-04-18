const input = document.getElementById("input")
const btn = document.getElementById("btn")
const lengthUnit = document.getElementById("length-unit")
const volumeUnit = document.getElementById("volume-unit")
const massUnit = document.getElementById("mass-unit")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const meterToFeet = input.value * 3.281
const feetToMeter = input.value / 3.281

const literToGallon = input.value * 0.264
const gallonTo

btn.addEventListener("click", function(){
    lengthUnit.textContent = input.value
})

