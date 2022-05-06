const expect = require("chai").expect;

/* eslint-disable no-undef */
const { BinarySearchTree } = require("../checkpoint.js");

describe("searchMin", function () {
  it("EJERCICIO 4: SearchMin debe encontrar el valor mas pequeño", function () {
    var tree = new BinarySearchTree(16);
    tree.insert(6);
    tree.insert(23);
    tree.insert(2);
    tree.insert(14);
    tree.insert(17);
    tree.insert(31);
    tree.insert(5);
    tree.insert(1);
    tree.insert(2);
    expect(tree.searchMin()).to.equal(1);
  });

  it("EJERCICIO 4: SearchMin debe encontrar el valor mas pequeño", function () {
    var tree = new BinarySearchTree(16);
    tree.insert(6);
    tree.insert(23);
    tree.insert(2);
    tree.insert(14);
    tree.insert(17);
    tree.insert(31);
    tree.insert(5);
    expect(tree.searchMin()).to.equal(2);
  });
});
