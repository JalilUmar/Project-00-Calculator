import inquirer from "inquirer";
async function welcome() {
    let tittle = '..........Let start calculation..........';
    console.log(tittle);
}
welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform: \n",
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2: "
        }
    ])
        .then((answer) => {
        if (answer.operator == 'Addition') {
            console.log(`${answer.num1} + ${answer.num2} =${answer.num1 + answer.num2}`);
        }
        else if (answer.operator == 'Subtraction') {
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
        }
        else if (answer.operator == 'Multiplication') {
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
        }
        else if (answer.operator == 'Division') {
            console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
        }
    });
}
// askQuestion()
async function startAgain() {
    do {
        await askQuestion();
        var startAgain = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue ? Press Y for yes and N for no : "
            }
        ]);
    } while (startAgain.restart == 'Y' || startAgain.restart == 'y' || startAgain.restart == 'YES' || startAgain.restart == 'yes');
}
startAgain();
