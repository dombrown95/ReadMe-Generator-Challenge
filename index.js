const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project',   
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',   
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',   
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project', 
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],  
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?', 
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can others run test for your project?', 
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?', 
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?', 
    },
  ];
  
  // function to write README file
  function writeToFile(fileName, data) {
  }
  
  // function to initialize program
  function init() {
  
  }
  
  // function call to initialize program
  init();