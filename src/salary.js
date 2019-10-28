const readlineSync = require("readline-sync");

const as = readlineSync.question("Annual salary: ");
const div = as / 24
const pretax = div * 0.07
const ppretax = div - pretax
const federal = ppretax * 0.157
const state = ppretax * 0.0447
const social = ppretax * 0.062
const medicare = ppretax * 0.0145

const add = federal + state + social + medicare
const final = ppretax - add
const ffinal = final.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour take-home pay each check will be " + ffinal + ".")
