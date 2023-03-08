const Employee = require('./Employee')

class Intern extends Employee{
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }
};

// const interns = [
//   new Intern("Blaze", 3, "email", "Intern", "UofU")
// ]

module.exports = Intern
