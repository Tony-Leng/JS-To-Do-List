// While loop !== quit keep looping
// Make quit part work first to avoid infinite loop
// Use prompt
// Storage of inputs in array, create at beginning in empty array named todolist, use .push
// Conditional inside while loop
// If input === new, then add input to array with push
// If input === list, iterate over all todos and print out
// Make sure list has indexes
// If input === delete, use index w/ splice to remove

// This will use
// - Arrays
// - Loops
//    - For
//    - While
// - Conditional

let input = prompt('What would you like to do?');
const toDoList = [];

while (input !== 'quit') {
  let input = prompt('What would you like to do?');
  if (input === 'new') {
    let task = prompt('Name of task');
    toDoList.push(task);
    console.log(`${task} added to your list`);
  } else if (input === 'list') {
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}: ${toDoList[i]}`);
    }
  } else if (input === 'delete') {
    let remove = prompt('Index of task to delete');
    toDoList.splice(remove, 1);
    console.log('Task deleted')
  } else if (input === 'quit') {
    console.log('You quit already?!')
    break;
  }
}
