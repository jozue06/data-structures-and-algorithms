'use strict';


class Queue {

  constructor() {
    this.length = 0;
  }



  push(item) {
    this[this.length++] = item;//?
    return this.length;
  }
  

  pop() {
    this[this.length--];
    delete this[this.length];
    return this;
  }

  enqueue(item) {
    this[this.length++] = item;
    return this.length;
  }
  

  dequeue() {
    this[this.length--];
    delete this[this.length];
    return this;
  }
  
  forEach(func) {
    for(let i=0; i < this.length; i ++){
      func(this[i]);
    }
    return undefined;
  }

  map(funct) {
    var arr = this;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      funct(newArr[i] = arr[i]);
    } 
    return newArr;
  }

  filter(functi){
    let arr = this;
    var filtered = [];
    for(let i = 0; i < arr.length; i++) {
      if (functi(arr[i])) filtered.push(arr[i]);
    }
    return filtered;
  }

}

export default Queue;