// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// get elements
const modal = document.getElementById('taskModal');
const btn = document.getElementById('taskBtn');
const submitBtn = document.getElementById('submitBtn');
const span = document.getElementsByClassName('close')[0];

// task elements
const titleIn = document.getElementById('title');
const dateIn = document.getElementById('date');
const descIn = document.getElementById('desc');

// dayjs object
const now = dayjs()

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // a bit clunky
    nextId = JSON.parse(localStorage.getItem("nextId"));
    let id = nextId;
    if (id == null) id = 0;
    JSON.stringify(nextId);
    localStorage.setItem("nextId", JSON.parse(id + 1));
    return id;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    btn.onclick = function() {
        modal.style.display = 'block'
    }
    submitBtn.onclick = function() {
        // create task object and send to local storage
        const task = {
            title: titleIn.value,
            data: dateIn.value,
            desc: dateIn.value,
            id: generateTaskId()
        }
        localStorage.setItem(task.id, JSON.stringify(task));

        // clear modal content
        titleIn.value = '';
        dateIn.value = '';
        descIn.value = '';

        modal.style.display = 'none';
    }
    span.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
