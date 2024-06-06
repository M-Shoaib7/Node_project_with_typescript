#! /usr/bin/env node

import inquirer from "inquirer";
import { Key } from "readline";

let c_value: {[Key: string]:number} ={
    PKR: 278.40,
    UAE: 3.68,
    USD: 1,

}

let ans = await inquirer.prompt([{
    type: "list",
    name:"from",
    message:"Converting From",
    choices:['PKR','UAE','USD']
},
{
    type: "list",
    name:"to",
    message:"Converting to",
    choices:['PKR','UAE','USD']
},
{
    type:"number",
    name:"amount",
    message:"your amount to convert"
}
])

console.log(c_value[ans.to]/ c_value[ans.from]* ans.amount);
