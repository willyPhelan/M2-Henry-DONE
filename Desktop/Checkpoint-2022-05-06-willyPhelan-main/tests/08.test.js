const expect = require("chai").expect;

/* eslint-disable no-undef */
const { isAncestor } = require("../checkpoint.js");

describe("EJERCICIO 8: isAncestor", function () {
  const genealogyTree = {
    "Mona Simpson": [],
    "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
    "Jacqueline Bouvier": ["Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
    "Patty Bouvier": [],
    "Selma Bouvier": ["Ling Bouvier"],
    Edwina: ["Abigail Simpson"],
    "Lisa Simpson": [],
    "Maggie Simpson": [],
    "Ling Bouvier": [],
    "Abigail Simpson": [],
  };
  it("Debería devolver true si la primer persona es ancestro de la segunda", function () {
    expect(
      isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
    ).to.equal(true);
  });
  it("Debería devolver false si la primer persona no es ancestro de la segunda", function () {
    expect(
      isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
    ).to.equal(false);
  });
  it("No es posible buscar en el sentido inverso", function () {
    expect(
      isAncestor(genealogyTree, "Maggie Simpson", "Jacqueline Bouvier")
    ).to.equal(false);
  });
});
