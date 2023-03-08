const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}

// const engineers = [new Engineer("Lazer", 2, "email", 'getGithub', "loopie21")];

module.exports =
  Engineer
;
