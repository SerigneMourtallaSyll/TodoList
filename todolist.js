document.getElementById('form-Task').addEventListener('submit', saveTask);

// Save new To-Do
function saveTask(e) {

  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;


  let task = {
    title,
    description
  };

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();

  // Reset form-Task
  document.getElementById('form-Task').reset();
  e.preventDefault();

}

// Changebg
// function Changebg(title) {

//   let tasks = JSON.parse(localStorage.getItem('tasks'));
//   let task = document.querySelector('#tasks .carte');
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].title == title) {
//       task.className = 'red';
//     }
//   }

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   getTasks();
// }

// Show To-Do List
function getTasks() {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML +=
      `<div class="card mb-3 carte">
        <div class="card-body">
        <div class="row">
          <div class="col-sm-3 text-left">
            <p>${title}</p>
          </div>
          <div class="col-sm-4 text-left">
            <p>${description}</p>
          </div>
          <div class="col-sm-5 d-flex bgc">
            <div class="col-sm-4">
              <a href="#"  class="btn todoD btn-danger">ToDo</a>
            </div>
            <div class="col-sm-4">
              <a href="#"  class="btn btn-warning todoDg" style="background-color: orange;">Doing</a>
            </div>
            <div class="col-sm-4">
              <a href="#"  class="btn btn-success todoDone">Done</a>
            </div>
          </div>
        </div>  
       </div>
      </div>`;
  }

}

getTasks(); 

let danger  = document.querySelectorAll('.todoD');
danger.forEach((element) => {
  element.addEventListener('click', (e) =>{
    console.log(e.target.parentNode);

    let div = e.target.parentNode.parentNode.parentNode.parentNode;
    div.style.backgroundColor = 'red';
  })
}
);

let orange   = document.querySelectorAll('.todoDg');
orange.forEach((element) => {
  element.addEventListener('click', (e) =>{
    console.log(e.target.parentNode);

    let div = e.target.parentNode.parentNode.parentNode.parentNode;
    div.style.backgroundColor = 'orange';
  })
}
);

let green   = document.querySelectorAll('.todoDone');
green.forEach((element) => {
  element.addEventListener('click', (e) =>{
    console.log(e.target.parentNode);

    let div = e.target.parentNode.parentNode.parentNode.parentNode;
    div.style.backgroundColor = 'green';
  })
}
);


