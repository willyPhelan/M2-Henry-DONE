const expect = require("chai").expect;

/* eslint-disable no-undef */
const { LinkedList, joinLinkedList } = require("../checkpoint.js");

describe("EJERCICIO 3: Join Linked List", function () {
  var linkedList = new LinkedList();

  it("EJERCICIO 3: joinLinkedList debe devolver una nueva lista a partir de las originales", function () {
    linkedList.add(1);
    linkedList.add(7);
    linkedList.add(20);
    var linkedListTwo = new LinkedList();
    linkedListTwo.add(4);
    linkedListTwo.add(13);
    linkedListTwo.add(2);
    var newLinkedList = joinLinkedList(linkedList, linkedListTwo);
    expect(newLinkedList.head.value).to.equal(1);
    expect(newLinkedList.head.next.value).to.equal(4);
    expect(newLinkedList.head.next.next.value).to.equal(7);
    expect(newLinkedList.head.next.next.next.value).to.equal(13);
    expect(newLinkedList.head.next.next.next.next.value).to.equal(20);
    expect(newLinkedList.head.next.next.next.next.next.value).to.equal(2);

    var linkedListThree = new LinkedList();
    linkedListThree.add(5);
    linkedListThree.add(14);
    linkedListThree.add(3);
    var newLinkedList2 = joinLinkedList(linkedList, linkedListThree);
    expect(newLinkedList2.head.value).to.equal(1);
    expect(newLinkedList2.head.next.value).to.equal(5);
    expect(newLinkedList2.head.next.next.value).to.equal(7);
    expect(newLinkedList2.head.next.next.next.value).to.equal(14);
    expect(newLinkedList2.head.next.next.next.next.value).to.equal(20);
    expect(newLinkedList2.head.next.next.next.next.next.value).to.equal(3);
  });
});
