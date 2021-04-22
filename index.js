// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

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
        name: "installation",
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
        name: "credits",
        type: "input",
        message: "Please list who contributed to this project."
    },
    {
        name: "license",
        type: "list",
        message: "what liscence would you like to use for this project",
        choices: ["", "MIT", "GNU GPLv3", "Apache 2.0", "BSD 3"]
    },
    {
        name: "github",
        type: "input",
        message: "Please enter your github username"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email address..."
    },
    {
        name: "tests",
        type: "input",
        message: "Write about any tests you might have written for this project..."
    },
    {
        name: "contributions",
        type: "input",
        message: "Please write guidelines for others who would like to contribute..."
    }
]);


// TODO: Create a function to write README file
function writeToFile( data) {
    fs.writeFile("./generated-files/README.md",generateMarkdown(data), err =>{
        if(err){
            throw err;
        }
        console.log("file generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => writeToFile(answers))
}

// Function call to initialize app
init();
