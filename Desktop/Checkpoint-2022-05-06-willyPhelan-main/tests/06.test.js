const { expect } = require("chai");
const { passport } = require("../checkpoint.js");

describe("EJERCICIO 6: passport", function () {
  let people = [
    { name: "Cristian", age: 19, allowed: ["BRA"] },
    { name: "Ana", age: 18, allowed: ["ALE"] },
    { name: "Nahuel", age: 23, allowed: ["ALE"] },
    { name: "Cristian", age: 15, allowed: ["ALE"] },
  ];
  let people2 = [
    { name: "Cristian", age: 15, allowed: ["BRA", "ALE"] },
    { name: "Ana", age: 12, allowed: ["SPA"] },
    { name: "Nahuel", age: 15, allowed: ["ARG"] },
  ];

  it("Deberia retornar false si la edad minima es menor a 18", function () {
    expect(passport(17, "BRA")).to.equal(false);
  });

  it("Solo puede acceder al país si lo tiene en sus permitidos", function () {
    let isAllowed = passport(18, "ALE");
    expect(isAllowed(people)).to.have.lengthOf(2);
  });

  it("Debería retornar false si nadie en la fila puede pasar", function () {
    let isAllowed = passport(18, "ALE");
    expect(isAllowed(people2)).to.equal(false);
  });
});
