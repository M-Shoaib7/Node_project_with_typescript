import inquirer from "inquirer";

let myBalance = 0; // dollar.
let isContinue = true;
const pinCode =5572;

const message = "Welcome to ATM";

console.log(message);

let pin_ans = await inquirer.prompt({
  type: "number",
  name: "ans",
  message: "Please Enter your pin code",
});

if(pin_ans.ans === 5572){

  do {

    let ans = await inquirer.prompt({
  type: "list",
  name : "list",
  message:"Select your option",
  choices:["deposit","withdraw","fast cash","balance check",]
  
  })
  
  //--------------------deposit----------------------
  if (ans.list === "deposit") {
    let ans = await inquirer.prompt({
        type: "number",
        name: "deposit_amount",
        message: "Please Enter amount to deposit"
    })
    if (ans.deposit_amount > 0) {
        myBalance = myBalance + ans.deposit_amount
        console.log(myBalance);
    }
    
  }
  //-------------------withdraw----------------------
  else if (ans.list === "withdraw") {
  ans = await inquirer.prompt({
    type: "number",
    name: "withdraw_amount",
    message: "Please Enter your amount ",
  
  })
  
  if (ans.withdraw_amount <= myBalance) {
  
    myBalance = myBalance - ans.withdraw_amount
    console.log(myBalance);
  }else{
    console.log("Insufficient Balance");
  }
  }
  //-------------------fast cash----------------------
  
  else if (ans.list === "fast cash"){
  ans = await inquirer.prompt({
    type: "list",
    name: "fast_cash",
    message: "Please select your amount",
    choices: ["500", "1000", "1500", "2000"]
  })
  
  if (ans.fast_cash <= myBalance){
  
    if(ans.fast_cash === "500"){
        myBalance -= ans.fast_cash
        console.log(myBalance);
  }else     if(ans.fast_cash === "1000"){
    myBalance -= ans.fast_cash
    console.log(myBalance);
  }else     if(ans.fast_cash === "1500"){
  myBalance -= ans.fast_cash
  console.log(myBalance);
  }else     if(ans.fast_cash === "2000"){
  myBalance -= ans.fast_cash
  console.log(myBalance);
  }
  }
  
  }
  //-------------------balance check----------------------
  else if (ans.list === "balance check") {
  console.log(`Your Balance is ${myBalance}`);
  }
  //------------------------while condition-------------------------
  let while_ans = await inquirer.prompt({
  type: "confirm",
  name: "condition",
  message: "Do you want to continue? ",
  })
  if (while_ans.condition === false) {
  
  isContinue = false
  }
  
  } while (isContinue);

}else{
  console.log("Wrong Pin Code");
  
}
