const readlineSync = require("readline-sync");

const a = readlineSync.question("Hourly wage: ");

const monday = readlineSync.question("\nMonday: ");
const tuesday = readlineSync.question("Tuesday: S");
const wednsday = readlineSync.question("Wednesday: ");
const thursday = readlineSync.question("Thursday: ");
const friday = readlineSync.question("Friday: ");
const saturday = readlineSync.question("Saturday: ");
const sunday = readlineSync.question("Sunday: \n");

const m = monday * a
const t = tuesday * a
const w = wednsday * a
const th = thursday * a
const f = friday * a
const s = saturday * a
const su = sunday * a
const final = m + t + w + th + f + s + su
const ffinal = final.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("You'll make " + ffinal + " this week.")
