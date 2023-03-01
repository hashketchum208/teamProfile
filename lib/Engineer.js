const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    this.github = github;
  }

  getRole(role) {
    return engineers;
  }

  getGithub(github) {
    return this.github;
  }
}

const engineers = [new Engineer("Lazer", 2, "email", 'getGithub', "loopie21")];

module.exports = {
  Engineer,
  engineers,
};
