const readlineSync = require("readline-sync");

const a = readlineSync.question("Width: ");
const b = readlineSync.question("Length: ");
const c = a * 2.54
const d = b * 2.54
const e = c * 2
const f = d * 2
const g = e + f
const h = g.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("A(n) " + a + "-by-" + b + "-inch sheet of paper has a perimeter of " + h + " centimeter(s).")
