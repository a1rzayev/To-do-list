export class Task{
    #id;
    #name;
    #description;
    #datecreated;
    #iscompleted;
    constructor(name, description, id){
        this.#name = name;
        this.#description = description;
        this.#datecreated = Date.now()
        this.#iscompleted = false;
        this.#id = id;
    }
    set setDescription(description){
        this.#description = description;
    }
    set setName(name){
        this.#name = name;
    }
    changeCompleted(){
        this.#iscompleted = !this.iscompleted;
    }
    set setCompleted(iscompleted){
        this.#iscompleted = iscompleted;
    }
    set setDateCreated(datecreated){
        this.#datecreated = datecreated;
    }
    get getId(){
        return this.#id;
    }
    get getName(){
        return this.#name;
    }
    get getDescription(){
        return this.#description;
    }
    get getCompleted(){
        return this.#iscompleted;
    }
    get getDateCreated(){
        // return this.#datecreated.getDay() + "/" + this.#datecreated.getMonth() + "/" + this.#datecreated.getFullYear();
        return this.#datecreated;
    }
    get getStringDate(){
        const date = new Date(this.#datecreated);
        return date.toLocaleString('en-GB');
    }
    toPublicObject(){
        return{
            id: this.#id,
            name: this.#name,
            description: this.#description,
            datecreated: this.#datecreated,
            iscompleted: this.#iscompleted
        }
    }
}