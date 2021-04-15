// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = () =>  inquirer.prompt([
    {
        name:"title",
        type: "input",
        message:"What is the title of your project?"
    },
    {
        name:"description",
        type:"input",
        message: "Please write a short description of your project..."
    },
    {
        name: "instalation",
        type: "input",
        message: "Please describe how you can install your project..."
    },
    {
        name: "screenshot",
        type: "input",
        message: "Please include a screenshot of your project within the files for your project then write the relative filepath here"
    },
    {
        name: "useage",
        type: "input",
        message: "Please describe how to use your project."
    },
    {
        name: "contributions",
        type: "input",
        message: "Please list who contributed to this project."
    },
    {
        name: "license",
        type: "list",
        message: "what liscence would you like to use for this project",
        choices: ["", "MIT", "GNU GPLv3"]
    }
]);
questions().then(answers => console.log(answers))
const {title, description, instalation, screenshot, useage, contributions, license} = answers


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
