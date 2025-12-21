const body = document.body;
const input = document.getElementById('input_box');
const button = document.getElementById('input_button');
const taskList = document.getElementById('task_list');


let index = 1;

function addTask() {
const input = document.getElementById('input_box');
    const task = input.value;

    if(task === ""){
        alert("Please Enter the Task");
    }
    
    let li = document.createElement("li");

    li.innerHTML = `<div id="todo-${index}"> ${task} <button onclick="deleteTask(${index})">Done</button></div> ` ;

     document.getElementById("list").appendChild(li);

     index = index + 1;
}

function deleteTask(index){

    const element = document.getElementById("todo-"+index);

    element.parentNode.removeChild(element);
}


