export class Task{
    #id;
    #name;
    #description;
    #datecreated;
    #iscompleted;
    constructor(name, description, id){
        this.#name = name;
        this.#description = description;
        let date = new Date();
        this.#datecreated = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
        this.#iscompleted = false;
        this.#id = id;
    }
    editDescription(description){
        this.#description = description;
    }
    editName(name){
        this.#name = name;
    }
    editIsdone(){
        this.#iscompleted = !this.iscompleted;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getDescription(){
        return this.#description;
    }
    getIsCompleted(){
        return this.#iscompleted;
    }
    getDateCreated(){
        return this.#datecreated;
    }
}