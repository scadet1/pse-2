const readlineSync = require("readline-sync");

const a = readlineSync.question("\nEnter three homework grades.\n");
const b = readlineSync.question("")
const c = readlineSync.question("")

const d = readlineSync.question("\nEnter three quiz grades.\n");
const e = readlineSync.question("")
const f = readlineSync.question("")

const g = readlineSync.question("\nEnter three test grades.\n");
const h = readlineSync.question("")
const i = readlineSync.question("")

const a2 = a * 0.15
const b2 = b * 0.15
const c2 = c * 0.15

const d2 = d * 0.35
const e2 = e * 0.35
const f2 = f * 0.35

const g2 = g * 0.50
const h2 = h * 0.50
const i2 = i * 0.50

const abc = (a2 + b2 + c2) / 3
const def = (d2 + e2 + f2) / 3
const ghi = (g2 + h2 + i2)  /3

const final = abc + def + ghi
const ffinal = final.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("Your marking period grade is " + ffinal + "%.")
