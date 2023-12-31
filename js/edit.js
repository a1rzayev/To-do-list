import { TASKS } from "./globals.js";
import { TaskList } from "./tasklist.js";
import { Task } from "./task.js";

const link = new URLSearchParams(window.location.search);
const taskid = parseInt(link.get("id"));

const form = document.querySelector("#edit-task-form");
const name = document.querySelector("#edit-task-name");
const description = document.querySelector("#edit-task-description");
const completed = document.querySelector("#completed-checkbox");
const editbutton = document.querySelector("#editbutton");

let indexoftask = 0;

let tasklist = new TaskList();
tasklist.getList();

let tasks = tasklist.getTasks;
let task = new Task('', '', 0);
let isConsist = false;
for (let i = 0; i < tasks.length; ++i) {
    if(tasks[i].getId === taskid){
        task = tasks[i];
        indexoftask = i;
        isConsist = true;
    }
}
if(!isConsist){
    form.innerHTML = "";
    const error = document.createElement("h1");
    error.textContent = "404 task doesn't exist";
    form.appendChild(error);
}
else{
    name.value = task.getName;
    description.value = task.getDescription;
    completed.checked = task.getCompleted;

    editbutton.addEventListener('click', () => {
        const nameRegex = /^[a-zA-Zа-яА-Я0-9\s]{1,16}(?!\d+$)(?:\S+\s?){2,}$/;
        const descriptionRegex = /\b\w+\b\s+\b\w+\b/;

        if (nameRegex.test(name.value) && descriptionRegex.test(description.value)) {
            tasks[indexoftask].setName = name.value;
            tasks[indexoftask].setDescription = description.value;
            tasks[indexoftask].setCompleted = completed.checked;

            tasklist.setTasks = tasks;
            tasklist.setList();
        } else {
            window.alert("Wrong input!");
            return false;
        }
    });
}