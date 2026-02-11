let temperaturaC = Number(process.argv[2]);
let temperaturaF = (temperaturaC * 9/5) + 32;
let temperaturaK = temperaturaC + 273;

console.log("Temperatura em Fahrenheit: ", temperaturaF);
console.log("Temperatura em Kelvin: ", temperaturaK);
