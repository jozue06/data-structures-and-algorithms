'use strict';

const hasLoop = () => {

  if (! this.head || !this.head.next) return false;

  let thisNode = this.head;
  let nextNode = thisNode.next;

  while(nextNode !== thisNode) {

    thisNode = thisNode.next;

    if(!thisNode.next) return false;

    nextNode = nextNode.next.next;

  }
  return true;
};

module.exports = hasLoop;