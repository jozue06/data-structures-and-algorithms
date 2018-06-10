const LinkedList = require('/Users/joshuamcclung/codefellows/401/data-structures-and-algorithms/linked-lists/LinkedListConstructor.js');

describe('Linked List Insertions', () => {

  it('should return a new linked list', ()=>{
    let linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(1);
    linkedList.append(2);
    console.log(linkedList);
  });
});
