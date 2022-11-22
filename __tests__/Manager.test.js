const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should set the officeNumber when assigned", () => {
    const office = "301A";
    const employee = new Manager("Bob", 5678, "boss@email.com", office);
    expect(employee.officeNumber).toBe(office);
  });

  it("should get the Manager role with getRole() method", () => {
    const role = "Manager";
    const employee = new Manager("Bob", 5678, "boss@email.com", "301A");
    expect(employee.getRole()).toBe(role);
  });

  it("should get the Manager's office with the getOfficeNumber() method", () => {
    const office = "301A";
    const employee = new Manager("Bob", 5678, "boss@email.com", office);
    expect(employee.getOfficeNumber()).toBe(office);
  });
});