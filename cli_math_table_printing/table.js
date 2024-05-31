#! /user/bin/env node
import inquirer from "inquirer";
let myTable = true;
while (myTable) {
    let myInput = await inquirer.prompt({
        type: "number",
        name: "num",
        message: "Enter any number : "
    });
    let myNumber = myInput.num;
    //console.log(myNumber);
    if (myNumber) {
        console.log(`Here is the table of ${myNumber}\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${myNumber} x ${i} = ${myNumber * i}`);
        }
    }
    else {
        console.log(`Enter a input a numaric value`);
    }
    let againPrint = await inquirer.prompt({
        type: "confirm",
        name: "answer",
        message: "Do you want to print another table ? ",
        default: false
    });
    if (againPrint.answer == false) {
        myTable = false;
        console.log('\n Thank you for using this program');
    }
}
