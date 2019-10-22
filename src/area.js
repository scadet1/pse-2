const readlineSync = require("readline-sync");

const a = readlineSync.question("Width: ");
const b = readlineSync.question("Length: ");
const c = a * 25.4
const d = b * 25.4
const e = c * d
const f = e.toFixed(2);

console.log("A(n) " + a + "-by-" + b + "-inch sheet of paper has an area of " + f + " square millimeter(s).")
