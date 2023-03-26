const form=document.querySelector('#form');
const taskInput=document.querySelector('#taskInput');
const taskList=document.querySelector('#tasksList');
const emptyList=document.querySelector('#emptyList');


form.addEventListener('submit', addTask);//добавлення задачі

//Видалення задачі
taskList.addEventListener('click',deleteTask);

taskList.addEventListener('click', doneTask);

//Функції
function addTask(event){
    event.preventDefault();//відміняєм відпарвку форми!

const taskText=taskInput.value;

const taskHTML=`
    <li class="list-group-item d-flex justify-content-between task-item">
        <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
             <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
             <button type="button" data-action="delete" class="btn-action">
        <img src="./img/cross.svg" alt="Done" width="18" height="18">
    </button>
    </div>
    </li>`;

    taskList.insertAdjacentHTML('beforeend',taskHTML);

    taskInput.value="";
    taskInput.focus();

    if (taskList.children.length>1){
        emptyList.classList.add('none');
    }
};

function deleteTask(event){
   
    if (event.target.dataset.action==='delete'){
       const perenNode = event.target.closest('.list-group-item');
       perenNode.remove();
    }

    if (taskList.children.length===1){
        emptyList.classList.remove('none');
    }
}

function doneTask(event){
  if (event.target.dataset.action==="done"){
   const perentNode=event.target.closest('.list-group-item');
   const taskTitle=perentNode.querySelector('.task-title');
   taskTitle.classList.toggle('task-title--done');
  }
}