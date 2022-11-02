const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('container__task');
const inputTask = document.getElementById('input-task');

document.addEventListener('mousemove', move);
function move(e) {

    this.querySelectorAll('.move').forEach(element => { 
        
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`; 
    })
};

addTask.addEventListener('click', () => {

    let task = document.createElement('div');
    task.classList.add('task');
    
    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`
    
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<img src="/src/check-solid.svg" class="check" alt="button check">';
    task.appendChild(checkButton);

    checkButton.addEventListener('click', () => {
        checkButton.parentElement.style.textDecoration = 'line-through';
        checkButton.style.visibility = "hidden";
    });

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="/src/trash-solid.svg" class="trash" alt="button trash">';
    task.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        task.remove()
    });

    inputTask.value === "" ? alert("La tarea no puede estar vacía") : taskContainer.appendChild(task);

    inputTask.value = "";
});