#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumbe",
        type: "number",
        message: "Please guess a number between 1 to 10 :"
    }
]);

if(answers.userGuessedNumbe === randomNumber) {
    console.log("Congratulation! you guessed right number.")
} else{
    console.log("You guessed wrong number.");
}