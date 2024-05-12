let tasks = [];

function renderTasks() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    tasks.sort((a, b) => a.priority.toLowerCase().localeCompare(b.priority.toLowerCase()));

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <span>${task.text}</span>
            <span class="priority">Prioridad: ${task.priority}</span>
            <button onclick="editTask(${index})">Editar</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;

        todoList.appendChild(li);
    });
}

function addTask() {
    const taskText = document.getElementById("task").value.trim();
    const taskPriority = document.getElementById("priority").value;

    if (taskText === "") {
        alert("Por favor, llene los campos vacíos");
        return;
    }

    const newTask = { text: taskText, priority: taskPriority };
    tasks.push(newTask);
    renderTasks();
    document.getElementById("task").value = "";
}

function editTask(index) {
    const newText = prompt("Edita la tarea:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        renderTasks();
    } else {
        alert("Debes ingresar un texto válido para la tarea");
    }
}

function deleteTask(index) {
    const confirmDelete = confirm("¿Quieres eliminar esta tarea?");
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
