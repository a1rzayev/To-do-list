import { Task } from "./task";

class TaskList{
    constructor(){
        this.tasks = []
    }
    addTask(mytask){
        this.tasks.push(mytask);
    }
    deleteTask(mytask){
        this.tasks = this.tasks.filter(task => task !== mytask);
    }
    getTasks(){
        return this.tasks;
    }
    getCompletedTasks(){
        return this.tasks.filter(task => task.completed);
    }
    getUncompletedTasks(){
        return this.tasks.filter(task => !task.completed);
    }
}