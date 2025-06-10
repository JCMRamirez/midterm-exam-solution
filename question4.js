const tasks = [
    {id:1,name: 'Learn Coding', description:'Understand the basic of coding'},
    {id:1,name: 'Build Project', description:'Create CRUD'}
];

let currentId = 2;

function addTask(name,description){
    currentId++;
    const newTask = {
        id: currentId,
        name,
        description
    };

    tasks.push(newTask);
    return newTask;
}

function getAllTask(){
    return tasks;
}