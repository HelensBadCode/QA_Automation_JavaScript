// String
import chalk from 'chalk';

console.log(chalk.bgBlack('Personal information  :'));
const userFirstName = 'Olena';
const userLastName = 'Turcheniuk';
console.log(`User first name : ${userFirstName}`);
console.log('User last name  :', userLastName);

// numbers
const yearOfBirth = 1996;
const currentYear = 2024;
export const userAge = currentYear - yearOfBirth;
console.log('User age        :', userAge);

// boolean
const isMarries = true;
const hasChildren = false;
console.log('Marital status, married : ', chalk.green(isMarries));
console.log('Presence of children :', chalk.red(hasChildren));

// undefined
const phoneNumber = undefined;

// null
const confirmationCode = null;
const genderOfChild = null;

console.log('Gender of the child : ', genderOfChild);
console.log(`User phone number ${phoneNumber} and confirmation code is ${confirmationCode}`);
