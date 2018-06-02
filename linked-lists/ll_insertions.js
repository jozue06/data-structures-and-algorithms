'use strict';

const Node = require('./ll_node.js');

class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }
    
  append(data) {
    const nodeToAdd = new Node(data);
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
  insertBefore(data , num) {
    let nodeToCheck = this.head;
    let count = 0;
      
    if(num > this.length) return 'Doesn\'t Exist!';
      
    while(count < num) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
      
    return nodeToCheck;
  }

  insertAfter(data , num) {
    let nodeToCheck = this.head;
    let count = 0;
      
    if(num < this.length) return 'Doesn\'t Exist!';
      
    while(count > num) {
      nodeToCheck = nodeToCheck.next;
      count--;
    }
      
    return nodeToCheck;
  }
 
}

module.exports = LinkedList;