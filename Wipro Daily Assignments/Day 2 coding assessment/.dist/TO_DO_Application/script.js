let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if(taskText === "") return alert("Please enter a task!");

    tasks.push(taskText);
    input.value = "";
    renderTasks();
}


function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");


        const span = document.createElement("span");
        span.textContent = task;
        li.appendChild(span);

    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}


function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


renderTasks();
