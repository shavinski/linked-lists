/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    if (this.head === null) this.head = node;
    if (this.tail !== null) this.tail.next = node;
    
    this.tail = node
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    
    if (this.head !== null) node.next = this.head;
    if (this.tail === null) this.tail = node;

    this.head = node;
  }

  /** pop(): return & remove last item. */

  pop() {

    let currNode = this.head;

    while(node.next !== this.tail) {
      currNode = this.next;

    }

    let returnValue = this.tail;
    this.tail = currNode;
    this.tail.next = null;

    return returnValue;
  }

  /** shift(): return & remove first item. */

  shift() {
    let prevHead = this.head;

    this.head = this.head.next;

    return prevHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
