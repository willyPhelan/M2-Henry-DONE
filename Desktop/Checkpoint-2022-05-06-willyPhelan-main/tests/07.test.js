const { expect } = require("chai");
const { countDeep } = require("../checkpoint.js");

describe("EJERCICIO 7: countDeep", function () {
  let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11]]]];

  it("Deberia contar la profundidad de nuestro array", function () {
    expect(countDeep(arr)).to.equal(4);
  });
});
