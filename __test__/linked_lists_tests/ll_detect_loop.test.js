'use strict';

const LinkedList = require('../../linked-lists/LinkedListConstructor.js');
// const hasLoop = require('../../linked-lists/ll_detect_loop.js');

describe('Has loop true or false:', () => {

  it('hasLoop should detect a looped list', () => {

    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(18);
    linkedList.append(8);
    linkedList.append(20);
    console.log('1 ', linkedList);
    let firstNode = linkedList.head.next.next;
    console.log('2 ', linkedList.head.next.next);
    console.log('3 ', firstNode);
    linkedList.head.next.next.next.next = firstNode;
    console.log('last ', linkedList.head.next.next.next.next , 'is circular! Looped!');

    expect(linkedList.hasLoop()).toBeTruthy();

  });

});