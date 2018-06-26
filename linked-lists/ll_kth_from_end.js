'use strict';

const Node = require('./ll_node.js');

class LinkedList {
  constructor() {
    this.root   = null;
    this.length = 0;
  }
    

  insertBefore(k) {
    let nodeToCheck = this.root;
    let count = 0;


    if(!this.root.k === k){
      const nodeToAdd = new Node(k);
      // this.root = nodeToAdd;
      this.root.next = nodeToAdd;
    }
      
    if(k > this.length) return 'Doesn\'t Exist!';
      
    while(count < k) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
      
    return nodeToCheck;
  }


  insertAfter(k) {
    let nodeNum = (this.root + count);
    let count = 0;
      
    if(k < this.length) return 'Doesn\'t Exist!';
      
    while(count > k) {
      nodeNum = nodeNum.next;
      count++;
    }
      
    return nodeNum;
  }
 
}



module.exports = LinkedList;