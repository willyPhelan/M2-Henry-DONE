const { expect } = require("chai");
const { LinkedList } = require("../checkpoint.js");

describe("EJERCICIO 1: Order LinkedList", function () {
  var linkedList = new LinkedList();

  it("EJERCICIO 1: Order Debe retornar una lista ordenada", function () {
    linkedList.add(6);
    linkedList.add(4);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(1);
    linkedList.orderList();
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.head.next.value).to.equal(2);
    expect(linkedList.head.next.next.value).to.equal(4);
    expect(linkedList.head.next.next.next.value).to.equal(6);
    expect(linkedList.head.next.next.next.next.value).to.equal(7);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(8);
  });
});
