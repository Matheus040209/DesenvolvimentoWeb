import chalk from 'chalk';
import generateName from 'sillyname';

const sillyName1 = generateName();
const sillyName2 = generateName();
const sillyName3 = generateName();

console.log(chalk.blue("Nome aleatorio 1: " + sillyName1));
console.log(chalk.red("Nome aleatorio 2: " + sillyName2));
console.log(chalk.green("Nome aleatorio 3: " + sillyName3));

