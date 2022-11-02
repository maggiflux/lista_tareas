// https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// trash <i class="fa-solid fa-trash"></i>

// check <i class="fa-solid fa-check"></i>

// add <i class="fa-sharp fa-solid fa-plus"></i>


//variables 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add Button 

addTask.addEventListener('click', function() {
    
    let task = document.createElement('div')
    task.classList.add('task');

    let li  = document.createElement('li');
    li.innerText = `${inputTask.value}`;

    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    if(inputTask.value  === "") {
        alert('enter a task')
    } else {
        taskContainer.appendChild(task);
        console.log('click')
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        
        checkButton.parentElement.style.textDecoration = "line-through"
        checkButton.remove();
        
     
     })
    
    deleteButton.addEventListener('click', function(e) {
        
        let target = e.target;

        target.parentElement.parentElement.remove()
       //task.remove()
    
    })
})

