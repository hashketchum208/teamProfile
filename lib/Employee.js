class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}


// const newEmployee = new Employee("John", 1, "john@mail.com");

// console.log(newEmployee.getRole())



module.exports = Employee;
