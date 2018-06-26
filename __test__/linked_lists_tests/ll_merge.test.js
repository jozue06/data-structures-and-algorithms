// const Node = require('./ll_node.js');
const LinkedList = require('../../linked-lists/LinkedListConstructor.js');
const ll_merge = require('../../linked-lists/ll_merge.js');

let linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(18);
// console.log(linkedList1);

let linkedList2 = new LinkedList();
linkedList2.append(14);
linkedList2.append(37);
linkedList2.append(22);
// console.log(linkedList2);

describe('mergin two', ()=>{

  it('checks length to be correct?', () =>{
    let newList = ll_merge(linkedList1, linkedList2);
    console.log(newList.head);
    console.log(newList.head.next);//?
    console.log(newList.length);//?
    expect(newList.length).toBe(7);//?
    expect(newList.head.next.next.data).toBe(2);
  });




});