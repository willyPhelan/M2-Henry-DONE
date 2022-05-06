const { expect } = require("chai");
const { LinkedList } = require("../checkpoint.js");

describe("EJERCICIO 2: Reverse LinkedList", function () {
  var linkedList = new LinkedList();

  it("EJERCICIO 2: reverseLinkedList Debe retornar una lista invertida", function () {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.reverseLinkedList();
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.head.next.value).to.equal(4);
    expect(linkedList.head.next.next.value).to.equal(3);
  });
});
