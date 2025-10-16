// index.js
const { celciusToFahrenheit } = require('./Rumus_suhu.js'); // pastikan nama file sama persis!
const chalk = require('chalk');

const suhuC = 30;
const suhuF = celciusToFahrenheit(suhuC);

console.log(chalk.yellowBright('=== Konversi Suhu ==='));
console.log(chalk.red(`${suhuC}°C = ${suhuF}°F`));
console.log(chalk.greenBright('Program Konversi Suhu Selesai(:')); 
