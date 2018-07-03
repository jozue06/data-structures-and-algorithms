'use strict';


let cats = [];
let dogs = [];  
let counter =0;
     

class AnimalShelter {

    
  constructor(){
    this.animal = [];
    this.order = 0;
  }
 


  enqueue(animal) {
    animal.order = counter;
    counter++;
    if(animal.type === 'cat'){
      return cats.push(animal);

    }
    if (animal.type === 'dog'){
      return dogs.push(animal);
    }
    
  }
      
    
  dequeue(pref) {
   
    if(pref.type === 'cat'){
      return cats.pop();

    }
    if (pref.type === 'dog'){
      return dogs.pop();
    }
    else 
      return dogs[0].order > cats[0] ? cats.pop() : dogs.pop();

  }
  
}


export default AnimalShelter;