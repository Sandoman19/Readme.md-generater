// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
function promptUser(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Write a brief description of your project: ",
      name: "description",
    },
    {
      type: "input",
      message: "Describe the installation process if any: ",
      name: "installation",
    },
    {
      type: "input",
      message: "What is this project usage for?",
      name: "usage",
    },
    {
      type: "list",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ],
      name: "license",
    },
    {
      type: "input",
      message: "Who are the contributors of this projects?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Is there a test included?",
      name: "tests",
    },
    {
      type: "input",
      message: "What do I do if I have an issue? ",
      name: "questions",
    },
    {
      type: "input",
      message: "Please enter your GitHub username: ",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email: ",
      name: "email",
    }
  ]);
} 

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await promptUser();
      const generateContent = generateReadme(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./dist/README.md', generateContent);
      console.log('Successfully wrote to README 👍');
  }   catch(err) {
      console.log(err);
  }
}

// Function call to initialize app
init();
