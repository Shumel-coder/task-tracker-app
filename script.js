//Section 1: TODOS
//TODO: Register submissions from the user on the form.
//TODO: Determine the value of the data submitted and add it to a Javascript array called tasks
//TODO: Call the render function to update the table with the new tasks

//Section 2: App State Variables
let tasks = [];

//Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");

//Functions
//Function to handle form submissions
function handleSubmission(event) {
  event.preventDefault();
  // TODO: Get form input values;
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDeadline = document.getElementById("taskDeadline").value;
  // TODO: Validate input fields;
  if (taskName == "" || taskDeadline == "") {
    return alert("Task name and deadline are required!");
  } else {
    alert(taskName + " has been added");
  }
  // TODO: Update the tasks array
  tasks.push({
    name: taskName,
    description: taskDescription,
    deadline: taskDeadline,
    complete:
      "<td><button onclick='markTaskComplete(this)'>Complete</button></td>",
  });
  render();
}

//Function to mark complete
function markTaskComplete(task) {
  tasks[task.parentElement.parentElement.id].complete = "<td>Completed</td>";
  render();
}
//Function to remove task
function removeTask(task) {
  tasks.splice([task.parentElement.parentElement.id], 1);
  render();
}
//Function to render tasks in the table
function render() {
  // TODO: Use array methods to create a new table row of data for each item in the array.
  tableBody.innerHTML = tasks
    .map(
      (task, index) =>
        `<tr id="${index}"> 
      <td>
      ${task.name}
      </td> 
      <td>
      ${task.description}
      </td> 
      <td>
      ${task.deadline}
      </td> 
      ${task.complete} 
      <td><button onclick='removeTask(this)'>Remove</button></td> 
    </tr>`
    )
    .join("");
}

//Function to initialize the table
function init() {
  tableBody.innerHTML = ""; // Clear the table and set headings
  tableHead.innerHTML =
    "<tr><th>Name</th><th>Description</th><th>Deadline</th><th>Completed/Incomplete</th><th>Remove</th></tr>";
  tasks = []; // Reset the tasks array
  render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener("submit", handleSubmission);

// Call the init function to set up the initial state of the app
init();
