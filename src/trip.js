const readlineSync = require("readline-sync");

const students = readlineSync.question("Stduents: ");
const teachers = readlineSync.question("Teachers: ");
const bus = readlineSync.question("Bus capacity: ");

const all = students + teachers
const remainder = all % bus
const busnum = all / bus
const final = busnum.toLocaleString ("en", {minimumFractionDigits: 0, maximumFractionDigits: 0});

console.log("\n" + final + "bus(es) is (are) needed, with " + remainder + " on the last bus.");
