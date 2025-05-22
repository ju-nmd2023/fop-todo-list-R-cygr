const toDoBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

showTasks();

//  Add task 
toDoBtn.addEventListener('click', function () {
  const newTaskText = taskInput.value.trim();

  if (newTaskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task object//
  const newTask = {
    text: newTaskText,
    done: false
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = ''; 
  showTasks();
}); 


//  Function to display a single task --> some of the following lines were help from my brother 
function addTask(task, index) {
  const listItem = document.createElement('li');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = task.done;
  checkBox.addEventListener('change', function () {
    tasks[index].done = checkBox.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTasks();
  });

  const taskText = document.createElement('span');
  taskText.textContent = task.text;
  if (task.done) {
    taskText.style.textDecoration = 'line-through';
    taskText.style.color = 'green';
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', function () {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTasks();
  });

  listItem.appendChild(checkBox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteBtn);
  toDoList.appendChild(listItem);
}

// Function to render all tasks
function showTasks() {
  toDoList.innerHTML = '';
  tasks.forEach((task, index) => {
    addTask(task, index);
  });
}
