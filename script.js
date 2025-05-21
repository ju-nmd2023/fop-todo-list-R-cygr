const toDoBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

///event listeners
//toDoBtn.addEventListener('click', addToDo);//
//toDoList.addEventListener('click', deletecheck);//

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

showasks();

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }

   todoInput.value = ''; // Clear the input field after adding a task
});

function addTask(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task;

  // Additional functionality to be added here

  todoList.appendChild(listItem);
}

todoForm.addEventListener('submit', function(event) {
  // Existing code

  addTask(newTask); // Add the new task
});


