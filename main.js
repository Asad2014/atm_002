import inquirer from "inquirer";
let mybalance = 10000; //dollar
let mypin = 3456;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        mybalance -= amountAns.amount;
        console.log("your remaining balance is" + mybalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your  balance is" + mybalance);
    }
}
else {
    console.log("incorrect pin code");
}
