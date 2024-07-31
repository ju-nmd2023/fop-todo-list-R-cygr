const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Stop procrastinating!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim();

        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Unicode for the cross symbol
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = ""; // Clear the input box
        saveData(); // Save the updated list to local storage
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the updated list to local storage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated list to local storage
    }
}, false);
//THE FOLLOWING WERE HELP FROM MY BROTHER ALONG WITH THE PRESENTATION SLIDES//
function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(item => {
        tasks.push({
            text: item.firstChild.textContent, //  task text
            checked: item.classList.contains("checked") // Whether the task is done
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks as JSON in local storage
}

function showTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.text;

        if (task.checked) {
            li.classList.add("checked");
        }

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", showTask);
