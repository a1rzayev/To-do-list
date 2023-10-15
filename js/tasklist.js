import { Task } from "./task.js";

export class TaskList{
    #tasks;
    constructor(){
        this.#tasks = new Map();
    }
    addTask(mytask){
        this.#tasks.set(mytask.getId());
    }
    deleteTask(mytask){
        this.#tasks.delete(mytask.getId());
    }
    getTasks(){
        return this.#tasks;
    }
    getCompletedTasks(){
        return this.#tasks.filter(task => task.completed);
    }
    getUncompletedTasks(){
        return this.#tasks.filter(task => !task.completed);
    }
}