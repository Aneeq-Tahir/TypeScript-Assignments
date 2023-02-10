import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function main() {
  let question = [
    {
      name: "operators",
      type: "list",
      message: "What operations do u wanna do?",
      choices: ["+", "-", "*", "/", "e"],
    },
    {
      name: "firstQuestion",
      type: "number",
      message: "Enter the first number:",
    },
    {
      name: "secondQuestion",
      type: "number",
      message: "Enter the second number:",
    },
  ];

  const answer = await inquirer.prompt(question);
  const operation = answer["operators"];
  const num1 = answer["firstQuestion"];
  const num2 = answer["secondQuestion"];

  switch (operation) {
    case "+":
      chalkAnimation.rainbow(`${num1 + num2}`);
      break;
    case "-":
      chalkAnimation.rainbow(`${num1 - num2}`);
      break;
    case "*":
      chalkAnimation.rainbow(`${num1 * num2}`);
      break;
    case "/":
      chalkAnimation.rainbow(`${num1 / num2}`);
      break;
    case "e":
      chalkAnimation.rainbow(`${num1 ** num2}`);
  }
}

main()