//Section 1: TODOS
//TODO: Register submissions from the user on the form.
//TODO: Determine the value of the data submitted and add it to a Javascript array called tasks
//TODO: Call the render function to update the table with the new tasks

//Section 2: App State Variables
let tasks = [];

//Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

//Functions
//Function to handle form submissions
function handleSubmission(event) {
  event.preventDefault();
  // TODO: Get form input values;
  const taskName = document.getElementById("taskName");
  const taskDescription = document.getElementById("taskDescription");
  const taskDeadline = document.getElementById("taskDeadline");
  // TODO: Validate input fields;
  if (
    document.getElementById("taskName") == "" ||
    document.getElementById("taskDeadline") == ""
  ) {
    return alert("Task name and deadline are required!");
  } else {
    return alert(taskName + " has been added");
  }
  // TODO: Update the tasks array
  tasks.push({
    name: taskName,
    description: taskDescription,
    deadline: taskDeadline,
  });
  render();
}

//Function to render tasks in the table
function render() {
  // TODO: Use array methods to create a new table row of data for each item in the array.
}

//Function to initialize the table
function init() {
  taskTable.innerHTML = ""; // Clear the table
  tasks = []; // Reset the tasks array
  render(); // Call the render function
}
