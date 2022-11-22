# Team Profile Generator (CLI Tool)
[![MIT License badge](https://img.shields.io/badge/license-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
    + [Prerequisites](#prerequsites)
    + [How to install](#how-to-install)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)


## Description
Team Profile Generator is a command line tool written in JavaScript using the **node.js** runtime. This tool will create a simple static site that serves as a profile for your team at work. It works by prompting you with serveral questions and then based on your inputs it will generate an `index.html` file inside the `/dist` directory. The tool will prompt you for a name, email, employee ID, and a special data point based on the role. The supported roles are Manager, Engineer, and Intern. Each data point will be displayed on the web page in a card for each employee.

## Installation
### Prerequisites
You must have **node.js** installed to run this application. I highly recommend using [**nvm**](https://github.com/nvm-sh/nvm) (node version manager) to manage your node.js installation.
<br>
This application is based on **node v16.18.0**.

### How to install
After you ensure that you have **node.js** installed you can simply clone this repositry:
```
git clone git@github.com:jakubcic/team-profile-generator.git
```

Then navigate over to the root of the `team-profile-generator` directory and run `npm install` in your terminal.

## Usage
Once you have everything installed, including the dependencies, you can run `node index.js` and the application will launch and begin prompting you. Once you answer all the questions you will find a new `index.html` file inside the `/dist` directory in your local repository.
<br>

Here's a video demo

```
placeholder
```

## Tests
This application includes a suite of tests. To run these, please install the [jest](https://jestjs.io/) node package.
```
npm install -D jest
```
Then simply run `npm test` and confirm if they all pass.

## Credits
This application uses v8.2.4 of the [inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package.


## License
This application is covered under the [MIT License](https://choosealicense.com/licenses/mit/).


