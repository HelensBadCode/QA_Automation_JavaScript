import chalk from 'chalk';

const averageGrade = Math.round(Math.random() * 100);
console.log(averageGrade);

switch (true) {
  case averageGrade >= 0 && averageGrade < 60:
    console.log(chalk.red('Незадовільно'));
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log(chalk.yellow('Задовільно'));
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log(chalk.blue('Добре'));
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log(chalk.cyan('Дуже добре'));
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log(chalk.green('Відмінно'));
    break;

  default:
    console.log(chalk.gray('Некоректний формат оцінки!'));
}
