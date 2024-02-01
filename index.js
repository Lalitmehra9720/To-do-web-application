let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        updateTaskList();
        taskInput.value = '';
    }
}

function updateTaskList() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Remove</button>
        `;
        tasksList.appendChild(listItem);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}