/*=========================================
        STUDY PLANNER
=========================================*/

const form = document.getElementById("task-form");

const taskInput = document.getElementById("task-name");

const dateInput = document.getElementById("task-date");

const priorityInput = document.getElementById("priority");

const taskList = document.getElementById("task-list");

const progressText = document.getElementById("progress-text");

const progressFill = document.getElementById("progress-fill");

const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

/*=========================================
        SAVE TASKS
=========================================*/

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/*=========================================
        UPDATE PROGRESS
=========================================*/

function updateProgress() {
  const completed = tasks.filter((task) => task.completed).length;

  progressText.textContent = `${completed} / ${tasks.length}`;

  const percentage = tasks.length === 0 ? 0 : (completed / tasks.length) * 100;

  progressFill.style.width = percentage + "%";
}

/*=========================================
        DISPLAY TASKS
=========================================*/

function displayTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.className = task.completed ? "task completed" : "task";

    li.innerHTML = `

            <div class="task-info">

                <h3>${task.title}</h3>

                <p>

                    Due: ${task.date}

                    <br>

                    Priority: ${task.priority}

                </p>

            </div>

            <div class="task-actions">

                <button class="complete-btn">

                    <i class="fas fa-check"></i>

                </button>

                <button class="delete-btn">

                    <i class="fas fa-trash"></i>

                </button>

            </div>

        `;

    li.querySelector(".complete-btn")

      .addEventListener("click", () => {
        const originalTask = tasks.find(
          (t) =>
            t.title === task.title &&
            t.date === task.date &&
            t.priority === task.priority,
        );

        if (originalTask) {
          originalTask.completed = !originalTask.completed;

          saveTasks();

          displayTasks();
        }
      });

    li.querySelector(".delete-btn")

      .addEventListener("click", () => {
        const taskIndex = tasks.findIndex(
          (t) =>
            t.title === task.title &&
            t.date === task.date &&
            t.priority === task.priority,
        );

        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);

          saveTasks();

          displayTasks();
        }
      });

    taskList.appendChild(li);
  });

  updateProgress();
}

/*=========================================
        ADD TASK
=========================================*/

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = {
    title: taskInput.value.trim(),

    date: dateInput.value,

    priority: priorityInput.value,

    completed: false,
  };

  if (task.title === "") {
    alert("Please enter a task.");

    return;
  }

  tasks.push(task);

  saveTasks();

  displayTasks();

  form.reset();
});

/*=========================================
        FILTERS
=========================================*/

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentFilter = button.dataset.filter;

    displayTasks();
  });
});

/*=========================================
        FOOTER YEAR
=========================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.innerHTML = `© ${new Date().getFullYear()} Oparinde Oluwajoba. All Rights Reserved.`;
}

/*=========================================
        LOAD TASKS
=========================================*/

displayTasks();

console.log("Planner Loaded Successfully");
