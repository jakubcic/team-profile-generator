const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should set the github account when assigned", () => {
    const username = "githubuser";
    const employee = new Engineer("Jakub", 1234, "email@email.com", username);
    expect(employee.github).toBe(username);
  });

  it("should get the Engineer role with getRole() method", () => {
    const role = "Engineer";
    const employee = new Engineer("Jakub", 1234, "email@email.com", "jakubcic");
    expect(employee.getRole()).toBe(role);
  });

  it("should get the github username with the getGithub() method", () => {
    const username = "jakubcic";
    const employee = new Engineer("Jakub", 1234, "email@email.com", username);
    expect(employee.getGithub()).toBe(username);
  });
});
