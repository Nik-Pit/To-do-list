"use strict";
// Select the elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Declare function to add tasks
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    // Make the task editable
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    taskTextElement.setAttribute("contentEditable", "true");
    taskTextElement.className = "editable-text";

    // Event listeners for handling the edit
    taskTextElement.addEventListener("blur", () => {
      if (taskTextElement.textContent.trim() === "") {
        alert("Task cannot be empty!");
        taskTextElement.textContent = taskText;
      }
    });

    taskTextElement.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        taskTextElement.blur();
      }
    });

    // Delete task button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    //Delete task button event listener
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };
    //Check task button
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    //Check task button event listener
    checkBox.addEventListener("click", () => {
      listItem.classList.toggle("checked");
      deleteButton.style.textDecoration = "underline";
    });
    //Append the children
    listItem.appendChild(checkBox);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    // Clear the input field after adding the task
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Event listener to the add task button
addTaskButton.addEventListener("click", addTask);

// Allow adding a task by pressing the Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
