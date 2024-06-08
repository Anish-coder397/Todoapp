function addTodo(){
    const taskInput = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")
    if(taskInput.value.trim() !== ""){
        const newTaskList = document.createElement("li")
        newTaskList.innerHTML = `${taskInput.value}
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="deleteTodo(this)">Delete</button> 
        `
        taskList.append(newTaskList)
    }
    taskInput.value = ""
    setLocalStorage()
}
function editTodo(button){
    const updatedtask = prompt("Edit your Task",button.parentNode.firstChild.textContent.trim())
    if(updatedtask !== null && updatedtask.trim()){
        button.parentNode.firstChild.textContent = updatedtask
    }
    setLocalStorage()
}
function deleteTodo(button){
    const taskList = document.getElementById("taskList")
    const tobeDelete = button.parentNode
    taskList.removeChild(tobeDelete)
    setLocalStorage()
}
function setLocalStorage(){
    const taskList = document.getElementById("taskList").innerHTML
    localStorage.setItem("ALL_tasks",taskList)
}
function getFromLocalStorage(){
    const taskList = document.getElementById("taskList")
    const dataInLocalStorage = localStorage.getItem("ALL_tasks")
    if(dataInLocalStorage){
        taskList.innerHTML = dataInLocalStorage
    }
}
window.onload = function(){
    getFromLocalStorage()
}
