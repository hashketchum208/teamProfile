const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(managers, 1)
    this.officeNumber = officeNumber;
  }

  getRole(role) {
    return Manager;
  }
}

const managers = [new Manager("Blazer", 1, "email", "Manager", 1)];

module.exports = {
  Manager,
  managers,
};
