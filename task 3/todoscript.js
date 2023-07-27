const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.querySelector('#new-task').value.trim();
    if (newTask !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${newTask}</span>
            <button class="delete-button">Delete</button>
            <button class="complete-button">Complete</button>
        `;
        taskList.appendChild(li);
        document.querySelector('#new-task').value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentNode.remove();
    } else if (event.target.classList.contains('complete-button')) {
        const taskItem = event.target.parentNode;
        taskItem.classList.toggle('completed');
    }
});
