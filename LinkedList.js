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
