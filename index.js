import { Task } from "./js/task.js";
import { TaskList } from "./js/tasklist.js";
import { LAST_ID } from "./js/globals.js";
import { TASKS } from "./js/globals.js";

if(localStorage.getItem(LAST_ID) === null)
    localStorage.setItem(LAST_ID, '1');

let lastid = parseInt(localStorage.getItem(LAST_ID));

const form = document.querySelector("#new-task-form");
const name = document.querySelector("#new-task-name");
const description = document.querySelector("#new-task-description");
const list = document.querySelector("#tasks");
const addbutton = document.querySelector("#addbutton");

let tasklist = new TaskList();

function fillList(id){

    const taskdiv = document.createElement('div');
    taskdiv.textContent = name.value;

    const editbutton = document.createElement('a');
    editbutton.textContent = 'Edit';
    editbutton.href = `./html/edit.html?id=${id}`;
    editbutton.addEventListener('click', editTask);

    const observebutton = document.createElement('a');
    observebutton.textContent = 'Observe';
    observebutton.href = `./html/observe.html?id=${id}`;

    const deletebutton = document.createElement('a');
    deletebutton.textContent = 'Delete';

    taskdiv.appendChild(editbutton);
    taskdiv.appendChild(observebutton);
    taskdiv.appendChild(deletebutton);

    list.appendChild(taskdiv)
}

if(lastid !== 1){
    tasklist.setTasks(JSON.parse(localStorage.getItem(TASKS)));
    let elements = new Map();
    elements = tasklist.getTasks();
    // elements.forEach(element => {
    //     fillList(element.key);
    // });
}

addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    if(name.value === "" || description.value === ""){
        window.alert("Write value in all fields");
        return false;
    }

    const newtask = new Task(name.value, description.value, lastid);
    tasklist.addTask(newtask);
    localStorage.setItem(TASKS, JSON.stringify(tasklist.getTasks()));

    lastid = lastid + 1;
    localStorage.setItem(LAST_ID, `${lastid}`);

    fillList(lastid);

    name.value = "";
    description.value = "";

    console.log(newtask);
    console.log(tasklist)
});

function editTask(id){
    // if(localStorage.getItem(id) === null){
    //     window.alert("Error in task. Uncompleted!");
    //     return false;
    // }
    openEditWindow();
}
function deleteTask(task){
    tasklist.deleteTask(task);
}

function openEditWindow(){
    const editwindow = window.open('', '_blank', 'width=400px,height=400px');
}

function openObserveWindow(){
    const observewindow = window.open('', '_blank', 'width=400px,height=400px');
}
