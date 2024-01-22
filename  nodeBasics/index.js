import chalk from 'chalk';

const temperatureAir = -1;
const atmosphericPressure = 749;
const humidAir = 91;
const windSpeed = 3.0;
const generalDescription = "From morning to evening, the sky in Kyiv is covered with clouds. It snowed lightly throughout the day, which ended only closer to the evening.";


console.log(chalk.bgBlack('Weather for tomorrow :'));
console.log(chalk.yellow('Temperature, °C :')+ chalk.bgYellow(temperatureAir));
console.log(chalk.red('Pressure, мм :')+ chalk.bgRed(atmosphericPressure));
console.log(chalk.cyan('Humidity, % :')+ chalk.bgCyan(humidAir));
console.log(chalk.green('Wind, m/sec :') +chalk.bgGreen(windSpeed));
console.log(chalk.blue('Description :') +chalk.bgBlue(generalDescription));