#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let whileCondition = true;
while (whileCondition === true) {
    //---------------------------------option--------------------------------------------
    let option = await inquirer.prompt([{
            type: "list",
            name: "user_option",
            message: "Select your option: ",
            choices: ["Add", "Remove"]
        }]);
    //---------------------------------Add--------------------------------------------
    if (option.user_option === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "Write to add somethig in the task list: ",
            }]);
        if (ans.user_ans !== "") {
            todoList.push(ans.user_ans);
            console.log(todoList);
        }
        else {
            console.log("Please write somethig to add in the todo list.");
        }
    }
    //---------------------------------Remove--------------------------------------------
    else if (option.user_option === "Remove") {
        let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "remove_item",
                message: "Select item to remove from the task list: ",
                choices: todoList
            }]);
        let index_to_remove = todoList.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todoList.splice(index_to_remove, 1);
            console.log('Item removed successfully :', removeChoice.remove_item);
            console.log(todoList);
        }
    }
    //----------------------------------confirm--------------------------------------------
    let user_ans = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue? ",
            default: true
        }]);
    if (user_ans.selection === false) {
        whileCondition = false;
    }
}
console.log(`Thank you for using the Todo List App. Goodbye!`);
