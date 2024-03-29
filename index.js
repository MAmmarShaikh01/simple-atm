#! /usr/bin/env node
import inquirer from "inquirer";
let myCurrentBalance = 10000; // Dollars
const myPinCode = 552005;
let usersPin = await inquirer.prompt([
    {
        name: 'pin',
        message: "Enter your pin",
        type: "number"
    }
]);
if (usersPin.pin === myPinCode) {
    console.log(`Correct pin code !!!`);
    let operationAns = await inquirer.prompt([
        {
            name: 'operation',
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myCurrentBalance) {
            console.log("Insufficient balance");
        }
        else {
            myCurrentBalance -= amountAns.amount;
            console.log(`you have withdrawn ${amountAns.amount} successfully`);
            console.log(`Now your current balance is ${myCurrentBalance}`);
        }
    }
    else if (operationAns.operation == "check balance") {
        console.log(`Your current balance is ${myCurrentBalance}`);
    }
    else if (operationAns.operation == "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: 'fastCash',
                message: "Please select an ammount",
                type: "list",
                choices: [500, 1000, 2000, 5000, 10000, 20000, 50000]
            }
        ]);
        if (fastCashAns.fastCash > myCurrentBalance) {
            console.log("Insufficient balance");
        }
        else {
            myCurrentBalance -= fastCashAns.fastCash;
            console.log(`you have withdrawn ${fastCashAns.fastCash} successfully`);
            console.log(`Now your current balance is ${myCurrentBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
