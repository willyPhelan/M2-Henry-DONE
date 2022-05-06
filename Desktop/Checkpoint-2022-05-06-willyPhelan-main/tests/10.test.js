const expect = require("chai").expect;

/* eslint-disable no-undef */
const { specialSort } = require("../checkpoint.js");

describe("EJERCICIO 9: specialSort", function () {
  var arrayOne = [
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Toni", age: 30, height: 1.75 },
    { name: "Mati", age: 25, height: 1.77 },
    { name: "Leo", age: 40, height: 1.83 },
  ];

  var arrayAgeAsc = [
    { name: "Mati", age: 25, height: 1.77 },
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Toni", age: 30, height: 1.75 },
    { name: "Leo", age: 40, height: 1.83 },
  ];

  var arrayAgeDesc = [
    { name: "Leo", age: 40, height: 1.83 },
    { name: "Toni", age: 30, height: 1.75 },
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Mati", age: 25, height: 1.77 },
  ];

  var functionOne = function (el1, el2) {
    if (el1.age > el2.age) return -1;
    return 1;
  };

  var functionOneBis = function (el1, el2) {
    if (el1.age < el2.age) return -1;
    return 1;
  };

  var arrayTwo = [
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Toni", age: 30, height: 1.75 },
    { name: "Mati", age: 25, height: 1.77 },
    { name: "Leo", age: 40, height: 1.83 },
  ];

  var arrayHeightDesc = [
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Leo", age: 40, height: 1.83 },
    { name: "Mati", age: 25, height: 1.77 },
    { name: "Toni", age: 30, height: 1.75 },
  ];

  var functionTwo = function (el1, el2) {
    if (el1.height < el2.height) return -1;
    return 1;
  };

  it("Debe retornar el arreglo ordenado ascendentemente por edad", function () {
    expect(specialSort(arrayOne, functionOne)).to.deep.equal(arrayAgeAsc);
  });

  it("Debe retornar el arreglo ordenado descendentemente por edad", function () {
    expect(specialSort(arrayOne, functionOneBis)).to.deep.equal(arrayAgeDesc);
  });

  it("Debe retornar el arreglo ordenado descendentemente por altura", function () {
    expect(specialSort(arrayTwo, functionTwo)).to.deep.equal(arrayHeightDesc);
  });
});
