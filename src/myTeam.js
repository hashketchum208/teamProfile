const generateHTML = (employeeArr) => {
  const employeeHTML = [];

  employeeArr
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) =>
      employeeHTML.push(`
      <div class="card" style="width: 18rem;">
      <div class="card-header">
     ${manager.getRole()}
     </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${manager.getName()}</li>
  <li class="list-group-item">${manager.getId()}</li>
  <li class="list-group-item">${manager.getEmail()}</li>
  <li class="list-group-item">${manager.getOfficeNumber()}</li>
</ul>
</div>`)
    );

  employeeArr
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) =>
      employeeHTML.push(`
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${engineer.getRole()}
       </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getName()}</li>
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item">${engineer.getGithub()}</li>
  </ul>
  </div>`)
    );

  // intern card
  
    employeeArr
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) =>
        employeeHTML.push(`
        <div class="card" style="width: 18rem;">
              <div class="card-header">
             ${intern.getRole()}
             </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.getName()}</li>
          <li class="list-group-item">${intern.getId()}</li>
          <li class="list-group-item">${intern.getEmail()}</li>
          <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
        </div>`)
  )

  return employeeHTML.join(" ");
};

module.exports = generateHTML;
