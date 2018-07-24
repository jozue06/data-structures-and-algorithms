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

  static fizzbuzztree(tree) {
    if (tree.root === null) {
      return tree;
    }

    function fizzbuzzHelper(node) {
      let val = node.data;

      if (node.left) {
        fizzbuzzHelper(node.left);
      }

      if (node.right) {
        fizzbuzzHelper(node.right);
      }

      if (val % 15 === 0) {
        node.data = 'fizzbuzz';
        return;
      }

      if (val % 5 === 0) {
        node.data = 'buzz';
        return;
      }

      if (val % 3 === 0) {
        node.data = 'fizz';
        return;
      }
    }
    fizzbuzzHelper(tree.root);
    return tree;
  }
}

module.exports = Tree;