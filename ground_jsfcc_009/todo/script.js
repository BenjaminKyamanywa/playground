// initialize variables
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];

let currentTask = {};

// add or update task
const addOrUpdateTask = () => {

  addOrUpdateTaskBtn.innerText = "Add Task";
  
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  }

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));

  updateTaskContainer()
  reset()
}

// update task
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `)
    }
  );
};

// delete task
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
}


// edit task
const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
  (item) => item.id === buttonEl.parentElement.id
);

currentTask = taskData[dataArrIndex];

titleInput.value = currentTask.title;
dateInput.value = currentTask.date;
descriptionInput.value = currentTask.description;

addOrUpdateTaskBtn.innerText = "Update Task";

taskForm.classList.toggle("hidden");  
}

// clear input fields after entering task
const reset = () => {

  addOrUpdateTaskBtn.innerText = "Add Task";


  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {}
}

// reflect retrieved task items on the UI
if (taskData.length) {
  updateTaskContainer();
}

// opening and closing form modal
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

// modal for close dialog box
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;


  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }

});

// modal for cancel dialog 
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());


// discard btn closes the modal
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset()
});

// get values from input fields, save into taskData array, and display on UI
taskForm.addEventListener("submit", (e) => {
  
  e.preventDefault();

  addOrUpdateTask();
});








