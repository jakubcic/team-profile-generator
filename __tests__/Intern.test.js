const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should set the school when assigned", () => {
    const school = "UConn";
    const employee = new Intern("Jakub", 1234, "email@email.com", school);
    expect(employee.school).toBe(school);
  });

  it("should get the Intern role with getRole() method", () => {
    const role = "Intern";
    const employee = new Intern("Jakub", 1234, "email@email.com", "UConn");
    expect(employee.getRole()).toBe(role);
  });

  it("should get the intern's school with the getSchool() method", () => {
    const school = "UConn";
    const employee = new Intern("Jakub", 1234, "email@email.com", school);
    expect(employee.getSchool()).toBe(school);
  });
});