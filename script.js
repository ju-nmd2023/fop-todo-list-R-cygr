const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//THE FOLLOWING CODE IS MODIFIED HELP FROM CHAT GBT AN SOME fROM THE PRESENTATION SLIDES
// Add a new task to the list
function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert("Stop procrastinating!");
        return;
    }

    const taskElement = createTaskElement(taskText);
    listContainer.appendChild(taskElement);
    inputBox.value = ""; // Clear input field
    updateLocalStorage();
}

// Create a new task element with the given text
function createTaskElement(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteButton = document.createElement("span");
    deleteButton.textContent = "\u00d7"; // Cross symbol
    li.appendChild(deleteButton);

    // Toggle task as done when clicked
    li.addEventListener("click", (e) => {
        if (e.target === li) {
            li.classList.toggle("checked");
            updateLocalStorage();
        }
    });

    // Delete the task when the delete button is clicked
    deleteButton.addEventListener("click", (e) => {
        li.remove();
        updateLocalStorage();
    });

    return li;
}

// Save tasks to local storage
function updateLocalStorage() {
    const tasks = Array.from(listContainer.querySelectorAll("li")).map((task) => {
        return {
            text: task.firstChild.textContent,
            checked: task.classList.contains("checked"),
        };
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage and render them
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTasks.forEach((task) => {
        const taskElement = createTaskElement(task.text);
        if (task.checked) {
            taskElement.classList.add("checked");
        }
        listContainer.appendChild(taskElement);
    });
}

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasks);
