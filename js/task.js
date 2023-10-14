export class Task{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.datecreated = new Date();
        this.completed = false;
    }
    editDescription(description){
        this.description = description;
    }
    editName(name){
        this.name = name;
    }
    editIsdone(){
        this.completed = !this.completed;
    }
}