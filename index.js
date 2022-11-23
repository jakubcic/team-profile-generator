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
const template = require("./src/template")

// initialize empty array for team data
const teamArray = [];

// prompt user for manager info, save to teamArray and 
// proceed to add another team member
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

// prompt user to add engineer, intern, or to finish building team
const addTeamMember = async () => {
  let response = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Add engineer or intern to the team:",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ]);

  // call different function depending on user's response
  if (response.option === "Engineer") {
    engineerPrompt();
  } else if (response.option === "Intern") {
    internPrompt();
  } else {
    // finish will take data from teamArray and generate the index.html
    finish();
  }
};

// prompt user for engineer info, save to teamArray and 
// proceed to add another team member
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

// prompt user for intern info, save to teamArray and 
// proceed to add another team member
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

// wrap fs.writeFile in a simpler function
const writeFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => 
    err ? console.error(err) : console.log(`Contents have been written to ${fileName}.`)
  );
};

// write data to index.html
function finish () {
  // initialize empty string for team member card data
  let teamCards = "";
  // loop through teamArray and pass data to renderCard to generate
  // html for each card, add it to teamCards
  for (let i = 0; i < teamArray.length; i++) {
    teamCards = teamCards + template.renderCard(teamArray[i])
  }
  // pass html from teamCards to renderPage to insert cards into page
  let teamPage = template.renderPage(teamCards);
  // write full html string from teamPage to index.html
  writeFile('./dist/index.html', teamPage);
}

// call managerPrompt in init function, run init on script load
function init() {

  managerPrompt();

}

init();
