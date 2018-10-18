export class Model 
{
    user;    items;
    constructor() {
        this.user = "Julius";
        this.items = [
            new TodoItem("Wash Clothes", false),
            new TodoItem("Cook Food", false),
            new TodoItem("Feed Dogs", false),
            new TodoItem("Feed Wife", false),
            new TodoItem("Talk to Wife", false),
            new TodoItem("Study C#", false),
            new TodoItem("Study Typescript", false)
        ]    
    } 
}

export class TodoItem 
{    
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    } 
}
