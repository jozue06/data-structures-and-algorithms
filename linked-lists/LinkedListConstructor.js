'use strict';

const Node = require('./ll_node.js');


class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }

  append(value) {
    const nodeToAdd = new Node(value);
    let nodeToCheck = this.head;
    if(!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  hasLoop() {

    if (! this.head || !this.head.next) return false;
  
    let thisNode = this.head;
    let nextNode = thisNode.next;
  
    while(nextNode !== thisNode) {
  
      thisNode = thisNode.next;
  
      if(!thisNode.next) return false;
  
      nextNode = nextNode.next.next;
  
    }
    return true;
  }

}
module.exports = LinkedList;