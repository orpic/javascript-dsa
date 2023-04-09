// What is a node in a linked list ?
// Ans - A node is an object that has value and next
let node = {
  value: 4,
  next: null,
};

// Now lets say we have a linked list
// Eg. 5->34->22->4
// The question is how will the object 22 point to the object 4
// Ans - Object 22 will point to the object 4 by having the next equal to object 4

let part_of_linked_list = {
  value: 22,
  next: {
    value: 4,
    next: null,
  },
};

// Okay, but how does the full linked list looks like
// Ans - linked list - Eg. 5->34->22->4

let full_linked_list_with_head = {
  head: {
    value: 5,
    next: {
      value: 34,
      next: {
        value: 22,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

// Where is the tail node ??
// Harder to put it in this nested object but lets try
// The tail points to the same last node as the node with value 22 points to

let last_node = {
  value: 4,
  next: null,
};

let full_linked_list_with_head_and_tail = {
  head: {
    value: 5,
    next: {
      value: 34,
      next: {
        value: 22,
        next: last_node,
      },
    },
  },
  tail: last_node,
};

// ---------------------------------------
// ---------------------------------------
// Creating a node with constructor

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

// the actual creation of a node with the help of above class + constructor
const newNode = new Node(4);

// Now we can create a node, we want to create a Linked List

class LinkedList {
  constructor(value) {
    // create a new node
    const newNode = new Node(value);
    // now we need that head point to this new node
    this.head = newNode;
    // bring in that tail and point it to the same thing as head is pointing to
    // we could do the this.tail = newNode, but a better way is the below one
    this.tail = this.head;
    // we keep track of the linked list
    this.length = 1;
  }
}

// Now when we create a new linked, we do it like the way below

const myNewLinkedList = new LinkedList(4);

// a linked list with single node
//
// head=> 4=>null
// tail=> 4=>null
// length = 1
//
