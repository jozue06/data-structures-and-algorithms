'use strict';

import queue from './helperMethods.js';
import LinkedList from '../linked-lists/LinkedListConstructor/js';
let stack1 = [];
let stack2 = [];

let outputQueue = new LinkedList;

() => {

  let append1 = queue.enqueue( () => {
    let resul = stack1[0].pop();
    stack2.push(resul);}

  );

  let append2 = queue.dequeue(() => {
    let resul2 = stack2[0].pop();
    stack1.push(resul2);
    
    
  });

  
  return outputQueue.append(append1, append2);

};


