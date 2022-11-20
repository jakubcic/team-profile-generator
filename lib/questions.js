const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Manager's Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Manager's email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager's office number:",
  }
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Engineer's Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Engineer's email:",
  },
  {
    type: "input",
    name: "github",
    message: "Engineer's GitHub username:",
  }
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Intern's Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Intern's email:",
  },
  {
    type: "input",
    name: "school",
    message: "Intern's school:",
  }
];

module.exports = {
  managerQuestions, 
  engineerQuestions, 
  internQuestions 
};