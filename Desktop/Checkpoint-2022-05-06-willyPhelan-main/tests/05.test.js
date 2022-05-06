const expect = require("chai").expect;

/* eslint-disable no-undef */
const { createBST } = require("../checkpoint.js");

describe("EJERCICIO 5: createBST", function () {
  it("Debe generar un arbol correctamente a partir de un array", function () {
    var tree = createBST([16, 6, 23, 2, 17, 31, 14, 5]);
    expect(tree.value).to.equal(16);
    expect(tree.left.value).to.equal(6);
    expect(tree.left.left.value).to.equal(2);
    expect(tree.left.left.right.value).to.equal(5);
    expect(tree.left.right.value).to.equal(14);
    expect(tree.right.left.value).to.equal(17);
    expect(tree.right.right.value).to.equal(31);
  });
});
