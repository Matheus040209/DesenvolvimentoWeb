import chalk from 'chalk';
import generateName from 'sillyname';

const sillyName1 = generateName();
const sillyName2 = generateName();
const sillyName3 = generateName();


console.log(chalk.blue('Nome aleatório: ', sillyName1));
console.log(chalk.green('Nome aleatório: ', sillyName2));
console.log(chalk.red('Nome aleatório: ', sillyName3));