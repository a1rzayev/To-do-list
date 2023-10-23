import { TASKS } from "./globals.js";
import { TaskList } from "./tasklist.js";
import { Task } from "./task.js";

const link = new URLSearchParams(window.location.search);
const taskid = parseInt(link.get("id"));

const elementsdiv = document.querySelector("#observe-task-div") ;
const name = document.querySelector("#observe-task-name");
const description = document.querySelector("#observe-task-description");
const completed = document.querySelector("#observe-completed");
const datecreated = document.querySelector("#observe-date-created")

let tasklist = new TaskList();
tasklist.getList();

let tasks = tasklist.getTasks;
let task = new Task('', '', 0);
let isConsist = false;

for (let i = 0; i < tasks.length; ++i) {
    if(tasks[i].getId === taskid){
        task = tasks[i];
        isConsist = true;
    }
}
if(!isConsist){
    elementsdiv.innerHTML = "";
    const error = document.createElement("h1");
    error.textContent = "404 task doesn't exist";
    elementsdiv.appendChild(error);
}
else{
    name.textContent += task.getName;
    description.textContent += task.getDescription;
    if(task.getCompleted){
        completed.textContent += "Yes";
    }
    else{
        completed.textContent += "No";
    }
    datecreated.textContent += task.getStringDate;
    console.log(task.getStringDate);
} 