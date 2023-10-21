import { TASKS } from "./globals.js";
import { Task } from "./task.js";

export class TaskList{
    #tasks;
    constructor(){
        this.#tasks = [];
    }
    addTask(mytask){
        this.#tasks.push(mytask);
    }
    deleteTask(mytask){
        this.#tasks.pop(mytask);
    }
    get getTasks(){
        return this.#tasks;
    }
    set setTasks(tasks){
        this.#tasks = tasks;
    }
    get getCompletedTasks(){
        return this.#tasks.filter(task => task.completed);
    }
    get getUncompletedTasks(){
        return this.#tasks.filter(task => !task.completed);
    }
    get sortByName(){
        return this.#tasks.sort();
    }

    setList(){
        const publictasks = [];
        this.#tasks.forEach(e => publictasks.push(e.toPublicObject()));
        localStorage.setItem(TASKS, JSON.stringify(publictasks));
    }
    getList(){
        const publictasks = JSON.parse(localStorage.getItem(TASKS));

        for (let i = 0; i < publictasks.length; ++i) {
            let task = new Task(publictasks[i].name, publictasks[i].description, publictasks[i].id);
            task.setCompleted = publictasks[i].iscompleted;
            task.setDateCreated = publictasks[i].datecreated;
            this.#tasks.push(task);   
        }
    }
}