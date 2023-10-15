import { Task } from "./js/task.js";
import { TaskList } from "./js/tasklist.js";

const form = document.querySelector("#new-task-form");
const name = document.querySelector("#new-task-name");
const description = document.querySelector("#new-task-description");
const list = document.querySelector("#tasks");
const addbutton = document.querySelector("#addbutton");

tasklist = new TaskList();

addbutton.addEventListener('click', addTask());

function addTask(name, description){
    if(name.value === "" || description.value === "")
        return window.alert("Write value in all fields");
    const newtask = new Task(name.value, description.value);
    tasklist.addTask(newtask);
    console.log(newtask);
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
