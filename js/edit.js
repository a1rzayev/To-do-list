import { TASKS } from "./globals.js";
import { TaskList } from "./tasklist.js";
import { Task } from "./task.js";

const link = new URLSearchParams(window.location.search);
const taskid = link.get("id");

const name = document.querySelector("#edit-task-name");
const description = document.querySelector("#edit-task-description");
const completed = document.querySelector("#completed-checkbox");
const editbutton = document.querySelector("#editbutton");

let tasklist = new TaskList();
tasklist.getList();

let task = new Task("", "", 0);

tasklist.getTasks.forEach(element => {
    if(element.getId === taskid)
        task = element;
});


name.value = task.getName;
description.value = task.getDescription;
completed.value =  task.getDescription;

editbutton.addEventListener('click', () => {
    task.setName = name.value;
    task.setDescription = description.value;
    task.setCompleted = completed.value;
});
