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
  });
  render();
}

//Function to render tasks in the table
function render() {
  // TODO: Use array methods to create a new table row of data for each item in the array.
  taskTable.innerHTML = tasks
    .map(
      (task) =>
        `<tr> 
      <td>
      ${task.name}
      </td> 
      <td>
      ${task.description}
      </td> 
      <td>
      ${task.deadline}
      </td> 
      <td><button onclick='markTaskComplete(this)'>Complete</button></td> 
      <td><button onclick='removeTask(this)'>Remove</button></td> 
    </tr>`
    )
    .join("");
}

//Function to initialize the table
function init() {
  taskTable.innerHTML =
    "<tr><td>'Name'</td><td>'Description'</td><td>'Deadline'</td><td>'Completed/Incomplete'</td></tr>"; // Clear the table and set headings
  tasks = []; // Reset the tasks array
  render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener("submit", handleSubmission);

// Call the init function to set up the initial state of the app
init();
