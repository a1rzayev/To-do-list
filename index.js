import { Task } from "./js/task.js";
import { TaskList } from "./js/tasklist.js";
import { LAST_ID } from "./js/globals.js";
import { TASKS } from "./js/globals.js";

const form = document.querySelector("#new-task-form");
const name = document.querySelector("#new-task-name");
const description = document.querySelector("#new-task-description");
const list = document.querySelector("#tasks");
const addbutton = document.querySelector("#addbutton");

// window.addEventListener('load', (event) =>{
if(localStorage.getItem(LAST_ID) === null)
    localStorage.setItem(LAST_ID, '0');
   
let lastid = parseInt(localStorage.getItem(LAST_ID));

let tasklist = new TaskList();

if(lastid !== 0){
    tasklist.getList();
    const elements = tasklist.getTasks;
    elements.forEach(e=> {
        fillList(e.getId, e.getName);
    });
}
// })

function fillList(id, name){

    const taskdiv = document.createElement('div');
    taskdiv.textContent = name

    const edita = document.createElement('a');
    const editbutton = document.createElement('button');
    edita.textContent = 'Edit';
    edita.href = `./html/edit.html?id=${id}`;

    const observea = document.createElement('a');
    const observebutton = document.createElement('button');
    observea.textContent = 'Observe';
    observea.href = `./html/observe.html?id=${id}`;

    const deletebutton = document.createElement('a');
    deletebutton.textContent = 'Delete';

    editbutton.appendChild(edita);
    observebutton.appendChild(observea);
    taskdiv.appendChild(editbutton);
    taskdiv.appendChild(observebutton);
    taskdiv.appendChild(deletebutton);

    list.appendChild(taskdiv)
}


addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    if(name.value === "" || description.value === ""){
        window.alert("Write value in all fields");
        return false;
    }
    lastid = lastid + 1;

    const newtask = new Task(name.value, description.value, lastid);

    tasklist.addTask(newtask);

    tasklist.setList();

    localStorage.setItem(LAST_ID, `${lastid}`);

    fillList(lastid, name.value);

    name.value = "";
    description.value = "";

    console.log(newtask);
    console.log(tasklist);
});
function deleteTask(task){
    tasklist.deleteTask(task);
}

function sortByDate(){

}

function sortByName(){

}