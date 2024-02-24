import chalk from 'chalk';

const averageGrade = Math.round(Math.random() * 100);
console.log(averageGrade);

if (averageGrade >= 0 && averageGrade < 60) {
  console.log(chalk.red('Незадовільно'));
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log(chalk.yellow('Задовільно'));
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log(chalk.blue('Добре'));
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log(chalk.cyan('Дуже добре'));
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log(chalk.green('Відмінно'));
} else {
  console.log(chalk.gray('Некоректний формат оцінки!'));
}
