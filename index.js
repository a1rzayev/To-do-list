import { Task } from "./js/task.js";
import { TaskList } from "./js/tasklist.js";
import { LAST_ID } from "./js/globals.js";
import { TASKS } from "./js/globals.js";

const form = document.querySelector("#new-task-form");
const name = document.querySelector("#new-task-name");
const description = document.querySelector("#new-task-description");
const list = document.querySelector("#tasks");
const addbutton = document.querySelector("#addbutton");
const sortselect = document.querySelector("#sort-select");
const filterselect = document.querySelector("#filter-select");

if(localStorage.getItem(LAST_ID) === null){
    localStorage.setItem(LAST_ID, '0');
}
   
let lastid = parseInt(localStorage.getItem(LAST_ID));

let tasklist = new TaskList();

function uploadList(list){
    const elements = list;
    elements.forEach(e=> {
        fillList(e);
    });
}

if(lastid !== 0){
    tasklist.getList();
    uploadList(tasklist.getTasks);
}

const showlist = tasklist.getTasks;

function fillList(task){

    const taskdiv = document.createElement('div');
    taskdiv.id = task.getId;

    const observea = document.createElement('a');
    observea.style.minWidth = "500px";
    observea.textContent = task.getName;
    observea.href = `./html/observe.html?id=${task.getId}`;

    const edita = document.createElement('a');
    const editbutton = document.createElement('button');
    edita.textContent = 'Edit';
    edita.href = `./html/edit.html?id=${task.getId}`;

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.addEventListener("click", () => {
        tasklist.deleteTask(task);
        tasklist.setList();
        const element = document.getElementById(`${task.getId}`);
        element.remove();
        sortAndFilter();
    })

    const completedcheckbox = document.createElement('input');
    completedcheckbox.type = "checkbox";
    completedcheckbox.checked = task.getCompleted;
    completedcheckbox.addEventListener('change', () => {
        let arr = tasklist.getTasks;
        task.setCompleted = completedcheckbox.checked;
        arr[arr.indexOf(task)] = task;
        tasklist.setTasks = arr;
        tasklist.setList();
        sortAndFilter();
    });

    editbutton.appendChild(edita);
    taskdiv.appendChild(observea);
    taskdiv.appendChild(deletebutton);
    taskdiv.appendChild(editbutton);
    taskdiv.appendChild(completedcheckbox);

    list.appendChild(taskdiv)
}

addbutton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-Я0-9\s]{1,16}(?!\d+$)(?:\S+\s?){2,}$/;
    const descriptionRegex = /\b\w+\b\s+\b\w+\b/;

    if (nameRegex.test(name.value) && descriptionRegex.test(description.value)) {
        lastid = lastid + 1;
    
        const newtask = new Task(name.value, description.value, lastid);
    
        tasklist.addTask(newtask);
    
        tasklist.setList();
    
        localStorage.setItem(LAST_ID, `${lastid}`);
    
        fillList(newtask);
    
        name.value = "";
        description.value = "";
    
        sortAndFilter();
    }
    else{
        window.alert("Wrong input!");
        return false;
    }
});

filterselect.addEventListener("change",sortAndFilter);

sortselect.addEventListener("change",sortAndFilter);

function sortAndFilter() {
    const filterValue = filterselect.value;
    const sortValue = sortselect.value;

    let sortedTasks = tasklist.getTasks;

    if (sortValue === "nosort") {
        sortedTasks.sort((a, b) => b.getDateCreated - a.getDateCreated);
        sortedTasks = sortedTasks.reverse();
    } 
    else if (sortValue === "datesort") {
        sortedTasks.sort((a, b) => b.getDateCreated - a.getDateCreated);
    } 
    else if (sortValue === "namesort") {
        sortedTasks.sort((a, b) => a.getName.localeCompare(b.getName));
    }

    let filteredTasks = sortedTasks;

    if (filterValue === "completed") {
        filteredTasks = filteredTasks.filter(task => task.getCompleted);
    } 
    else if (filterValue === "uncompleted") {
        filteredTasks = filteredTasks.filter(task => !task.getCompleted);
    }

    list.innerHTML = "";
    uploadList(filteredTasks);
}