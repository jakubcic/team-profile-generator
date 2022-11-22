const Employee = require("../lib/Employee");

describe("Employee", () => {

  it('should create an Employee object when called', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  it('should set the employee name when assigned', () => {
    const name = "Jakub";
    const employee = new Employee("Jakub");
    expect(employee.name).toBe(name);
  });

  it('should set the employee id when assigned', () => {
    const fakeID = 1234;
    const employee = new Employee("Jakub", fakeID);
    expect(employee.id).toBe(fakeID);
  });

  it('should set the email when assigned', () => {
    const email = "email@email.com"
    const employee = new Employee ("Jakub", 1234, email);
    expect(employee.email).toBe(email)
  });

  it('should get name with getName() method', () => {
    const name = "Jakub";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
  });

  it('should get id with getId() method', () => {
    const fakeID = 1234;
    const employee = new Employee("Jakub", fakeID);
    expect(employee.getId()).toBe(fakeID);

  });

  it('should get email with getEmail() method', () => {
    const email = "Jakub";
    const employee = new Employee("Jakub", 1234, email);
    expect(employee.getEmail()).toBe(email);
  });

  it('should get employee role ("Employee") with getRole() method', () => {
    const role = "Employee";
    const employee = new Employee("Jakub", 1, "email@email.com");
    expect(employee.getRole()).toBe(role);
    });

});
