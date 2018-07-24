'use strict';

//node construx
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//tree construx, methods
class Tree {

  constructor() {

    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;

    }
  }


  static findMaximumValue(tree) {
    if (!tree.root.right && !tree.root.left) {
      return tree.root.value;
    }

    return maxHelper(tree.root, tree.root.value);

    function maxHelper(node, maxVal) {

      if (node.left) {
        maxVal = maxHelper(node.left, maxVal);
      }
      if (node.right) {
        maxVal = maxHelper(node.right, maxVal);
      }
      maxHelper(tree.head);
      return maxVal;
    
    }
  }
}


module.exports = Tree;