const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
const inquirer = require("inquirer");
const fs = require("fs");

const teamArray = [];

const managerPrompt = async () => {
  let response = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  teamArray.push(manager);
  addTeamMember();
};

const addTeamMember = async () => {
  let response = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Add engineer or intern to the team:",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ]);

  if (response.option === "Engineer") {
    engineerPrompt();
  } else if (response.option === "Intern") {
    internPrompt();
  } else {
    writeFile();
  }
};

const engineerPrompt = async () => {
  let response = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(
    response.name,
    response.id,
    response.email,
    response.github
  );
  teamArray.push(engineer);
  addTeamMember();
};

const internPrompt = async () => {
  let response = await inquirer.prompt(internQuestions);
  const intern = new Intern(
    response.name,
    response.id,
    response.email,
    response.school
  );
  teamArray.push(intern);
  addTeamMember();
};

function writeFile() {
  console.log(teamArray);
  console.log(teamArray[Engineer]);
  // insert code here to write to file. pass data from teamArray to
  // a function that renders the html page by inserting this data
  // into template literals
}

function init() {
  managerPrompt();
}

init();
