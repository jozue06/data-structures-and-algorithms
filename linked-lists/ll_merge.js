'use strict';

const ll_merge = (list1, list2) => {
  let new1 = list1.head;
  let new2 = list2.head;
  
  while (new1 || new2) {
    list1.length++;
    if (!new2) {
      list1.length++;
      return list1;
    }
    if(!new1.next) {
      new1.next = new2;
      list1.length++;
      return list1;
    }
  
    let stop1 = new1.next;
    let stop2 = new2.next;

    new1.next = new2;
    new2.next = stop1;
    
    new1 = stop1;
    new2 = stop2;
  }


  
};
    


module.exports = ll_merge;
