const readlineSync = require("readline-sync");

const a = readlineSync.question("Width: ");
const b = readlineSync.question("Length: ");
const s = 2
const a2 = a ** s
const b2 = b ** s
const c2 = a2 + b2
const c = Math.sqrt(c2)
const d = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("A(n) " + a + "-by-" + b + "-inch sheet of paper has a diagonal of " + d + " inch(s).")
