//* Array can be used as variety of data structure

const array = [11, 23, 36];

//%1. Array (with index)
array[0] = 54;
console.log("array", array);

//%2. Linked List (add more elements);
array.push(48);
console.log("linked list", array);

//%3. Stack (LIFO)
array.push(59);
console.log("stack", array);
const popResult = array.pop();
console.log({popResult});
console.log("stack", array);

//% 4. Queue (FIFO)
array.push(62);
console.log("queue", array);
const dequeueResult = array.shift();
console.log({dequeueResult});
console.log("queue", array);

//% 5. Double ended queue (FI )
array.unshift(05);
console.log("dequeue", array);
const dpPop = array.pop();
console.log({dpPop});
console.log("dequeue", array);


//* unshift  |        | push
//*          v        v
//#          [11, 23, 36]
//! Shift    ^      ^   pop
