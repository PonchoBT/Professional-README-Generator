const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How is your project installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How is your project tested?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

  function init() {
    inquirer.prompt(questions).then((data) => {
      const filename = `${data.github}.md`;
  
      fs.writeFile(filename, generateMarkdown(data), (err) => {
        if (err) console.error(err);
        else console.log("Thanks! Your Professional Readme is generated :)");
      });
    });
  }
  init();
