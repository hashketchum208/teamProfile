const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager'
  }
}

// const newManager = new Manager("Peter", 2, "peter@mail.com", 123456);

// console.log(newManager.getOfficeNumber())

module.exports = Manager;