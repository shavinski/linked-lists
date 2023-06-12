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

    this.tail = node;
    this.length++;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);

    if (this.head !== null) node.next = this.head;
    if (this.tail === null) this.tail = node;

    this.head = node;
    this.length++;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) throw new Error("empty list");
    if (this.length === 1) {
      let returnValue = this.tail;

      this.head = null;
      this.tail = null;

      this.length--;
      return returnValue.val;
    }


    let currNode = this.head;

    while (currNode.next !== this.tail) {
      currNode = currNode.next;

    }

    let returnValue = this.tail;
    this.tail = currNode;
    this.tail.next = null;

    this.length--;
    return returnValue.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length) throw new Error("empty list");
    // if (this.length === 1) {
    //   let returnValue = this.tail;

    //   this.head = null;
    //   this.tail = null;

    //   this.length--;
    //   return returnValue.val;
    // }


    let prevHead = this.head;

    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return prevHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0) throw new Error;

    let currNode = this.head;

    for (let i = 0; i < idx; i++) {
      if (currNode.next === null) throw new Error;
      currNode = currNode.next;
    }

    return currNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0) throw new Error;

    let currNode = this.head;

    for (let i = 0; i < idx; i++) {
      if (currNode.next === null) throw new Error;
      currNode = currNode.next;
    }

    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0) throw new Error;

    let node = new Node(val);

    // want new node to be the prev.next 
    // we want the node at old index to be on new node.next 
    
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return undefined;
    }
    
    if(idx === 0){
      node.next = this.head;
      this.head = node;
      this.length++;
      return undefined;
    }

    let currNode = this.head;
    let prevNode;
    //console.log("outsideee", currNode)
    //traverse through list
    for (let i = 0; i < idx; i++) {
      // if (currNode.next === null) throw new Error;
      //console.log(currNode)
      prevNode = currNode;
      currNode = currNode.next;
    }

    //insert
    prevNode.next = node;
    if (currNode === null) {
      this.tail = node;
    }
    node.next = currNode;

    this.length++;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length || this.length === 0) throw new Error;

    let currNode = this.head;
    let prevNode;
    
    if (idx === 0) {
      return this.shift();
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currNode.val;
    }

    //traverse through list
    for (let i = 0; i < idx; i++) {
      // if (currNode.next === null) throw new Error;
      //console.log(currNode)
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = currNode.next;
    this.length--;

    return currNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
