const inquirer = require("inquirer");

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const generateHTML = require("./src/myTeam")

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;


const employeeArr = [];

// Use writeFileSync method to use promises instead of a callback function

const managerInfo = () => {
  inquirer 
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "list",
        name: "id",
        message: "What is your ID?",
        choices: [1, 2, 3, 4, 5],
      },
      {
        type: "input",
        name: "email",
        message: "What is your Email?",
      },
       {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      }
    ])
 
    .then((answers) => {
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber )
      // console.log(newManager)
      employeeArr.push(newManager);
      showMenu();
    });
 };

 const engineerInfo = () => {
  inquirer 
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is engineer's name?",
      },
      {
        type: "list",
        name: "id",
        message: "What is engineer's ID?",
        choices: [1, 2, 3, 4, 5],
      },
      {
        type: "input",
        name: "email",
        message: "What is engineer's Email?",
      },
       {
        type: "input",
        name: "github",
        message: "What is engineer's github?",
      }
    ])
 
    .then((answers) => {
      const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github )
      // console.log(newManager)
      employeeArr.push(newEngineer);
      showMenu();
    });
 };

 const internInfo = () => {
  inquirer 
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is intern's name?",
      },
      {
        type: "list",
        name: "id",
        message: "What is intern's ID?",
        choices: [1, 2, 3, 4, 5],
      },
      {
        type: "input",
        name: "email",
        message: "What is intern's Email?",
      },
       {
        type: "input",
        name: "school",
        message: "What is intern's school?",
      }
    ])
 
    .then((answers) => {
      const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school )
      // console.log(newManager)
      employeeArr.push(newIntern);
      showMenu();
    });
 };

const showMenu = () => {
  inquirer.prompt([{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "Add an engineer",
      "Add an intern",
      "Generate the HTML!"
    ]
  }])
  .then(answer => {
    if(answer.action == "Add an engineer") {
      // activate engineer function
      engineerInfo()
    }

    if(answer.action == "Add an intern") {
      // activate intern function
      internInfo()
    }

    if(answer.action == "Generate the HTML!") {
      // activate generate HTML function
      console.log(employeeArr)
      end()
    }
  })
}

const end = () => {
  writeFile("./dist/index.html", generateHTML(employeeArr))
  .then(() => console.log("Successfully wrote to dist/index.html"))
    .catch((err) => console.error(err));
}

// Bonus using writeFileSync as a promise
const init = () => {
  managerInfo()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    // .then((answers) => writeFile("dist/index.html", generateHTML(answers)))
    // .then(() => console.log("Successfully wrote to dist/index.html"))
    // .catch((err) => console.error(err));
};



init();
