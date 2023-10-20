import { Task } from "./task.js";

export class TaskList{
    #tasks;
    constructor(){
        this.#tasks = new Map();
    }
    addTask(mytask){
        this.#tasks[mytask.getId()] = mytask;
    }
    deleteTask(mytask){
        this.#tasks.delete(mytask.getId(), mytask);
    }
    getTasks(){
        return this.#tasks;
    }
    setTasks(tasks){
        this.#tasks = tasks;
    }
    getCompletedTasks(){
        return this.#tasks.filter(task => task.completed);
    }
    getUncompletedTasks(){
        return this.#tasks.filter(task => !task.completed);
    }
}