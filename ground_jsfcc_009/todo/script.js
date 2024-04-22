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

const taskData = []
let currentTask = {}

// opening and closing form modal
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

// modal for close dialog box
closeTaskFormBtn.addEventListener("click", () => confirmCloseDialog.showModal());

// modal for cancel dialog 
cancelBtn.addEventListener("click", confirmCloseDialog.close());

// discard btn closes the modal
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

// get values from input fields, save into taskData array, and display on UI
taskForm.addEventListener("submit", (e) => {
  
  e.preventDefault();
  
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id).value;
  
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value
  }

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }

  taskData.forEach(({id, title, date, description}) => {
    tasksContainer += 
    ` 
    <div class="task" id="${id}"></div>
    <p><strong>Title:</strong>${title}</p>
    <p><strong>Date:</strong>${date}</p>
    <p><strong>Description:</strong>${description}</p>
    <button type="button" class="btn">Edit</button>
    <button type="button" class="btn">Delete</button>
    `
  });

  taskForm.classList.toggle("hidden");
});

// clear input fields after entering task
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {}
}







