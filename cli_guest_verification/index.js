#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Guest Verification Cli");
let myLoop = true;
let myInvitedGuest = ['ali', 'asad', 'abid', 'shoaib', 'sajid', 'sabir', 'yasir', 'sufyan'];
while (myLoop) {
    let userInput = await inquirer.prompt({
        type: "input",
        name: "guestName",
        message: "Enter your name"
    });
    let guestName = userInput.guestName;
    let lowerGuestName = guestName.toLowerCase();
    if (myInvitedGuest.includes(lowerGuestName)) {
        console.log(`Welcome Mr.  ${guestName}! please make yourself comfortable`);
        myLoop = false;
    }
    else {
        console.log(`\n sorry ${guestName} you are not invited \n please try again`);
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'askNameAgain',
            message: 'Do you want to try again',
            default: false
        });
        if (!askNameAgain.askNameAgain) {
            myLoop = false;
            console.log("\n Thank you! you are not invited\n");
        }
    }
}
