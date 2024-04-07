#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n\t ***WELCOME TO YOUR CURRENCY CONVERTOR*** \n"));
const currency = {
    USD: 1,
    EUR: 0.92276,
    GBP: 0.79137,
    INR: 83.328671,
    PKR: 277.635,
    CAD: 1.35017,
    AUD: 1.51958,
    JPY: 151.61,
    AED: 3.6725
};
async function convertCurrency() {
    let answer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.magenta("Select Your Currency"),
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "CAD", "AUD", "JPY", "AED"],
        },
        {
            name: "to",
            type: "list",
            message: chalk.magenta("Select Your Conversion Currency"),
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "CAD", "AUD", "JPY", "AED"],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.magenta("Enter Your Amount"),
        },
    ]);
    let fromAmount = currency[answer.from];
    let toAmount = currency[answer.to];
    let amount = answer.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(`Your converted amount is: ${chalk.green(convertedAmount.toFixed(2))}`);
    console.log(Math.round(convertedAmount));
    return convertedAmount;
}
async function main() {
    let exit = false;
    while (!exit) {
        await convertCurrency();
        let { exitAnswer } = await inquirer.prompt({
            name: "exitAnswer",
            type: "list",
            message: chalk.magenta("Do you want to exit or select currency again "),
            choices: ["Exit", "Select currency again"]
        });
        if (exitAnswer === "Exit") {
            exit = true;
        }
    }
    console.log(chalk.cyan.bold("\n\t *THANK YOU FOR USING THE CURRENCY CONVERTER* \n"));
}
main();
