const Employee = require('./Employee')

class Intern extends Employee{
  constructor(name, id, email, role, school) {
    
    this.school = school;
  }

  getRole(role) {
    return Intern;
  }

  getSchool(school) {
    return this.school;
  }
};

const interns = [
  new Intern("Blaze", 3, "email", "Intern", "UofU")
]

module.exports = {
  Intern,
  interns
}
