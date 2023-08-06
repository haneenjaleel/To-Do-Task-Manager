// const inputTask=document.getElementById("id-iput");
// const addBtn=document.getElementById("btn");
// const list=document.getElementById("my-list");
// const delet=document.getElementsByClassName("delet");

// const listArray=Array.from(list.children);
// const deletArray=Array.from(delet);
// console.log(listArray);

// addBtn.addEventListener('click' , (e)=>{
// e.preventDefault();
// let newText=inputTask.value ;

// let li=document.createElement("li");

// let paragraph=document.createElement("p");
// paragraph.textContent=newText;

// let delBtn=document.createElement("button");
// delBtn.type=("submit");
// delBtn.textContent="delet";
// li.appendChild(paragraph);
// li.appendChild(delBtn);
// list.appendChild(li);
// });

// listArray.forEach((item) => {
//     item.addEventListener('click', (e)=> {
//         item.classList.add("hidden");
//         listArray.pop(item);
//     })
// });
// استدعي input
let tasks = [];
function addTask(e) {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  // اذا فارغة طلعلي مسج
  if (taskText == "") {
    alert("please enter a task .");
    return;
  }

  // راح اسوي اوبجكت واضيفه للاري تبع الخزن واستدعي دالة التحديث اللي رح نسويها بعد شويه
  const newTask = {
    text: taskText,
  };
  // e.preventDefault();
  tasks.push(newTask);
  updateTaskList();
  taskInput.value = "";
}

// دالة التعديل
function editTask(index) {
  const updatedTaskText = prompt("Edit the task", tasks[index].text);
  if (updatedTaskText !== null) {
    tasks[index].text = updatedTaskText.trim();
    updateTaskList();
  }
}

// دالة الحذف
function deletTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// دالة الدن
function doneTask(index) {
  tasks[index].done = !tasks[index].done;
  updateTaskList();
}

// دالة التحديث
function updateTaskList() {
  const taskdiv = document.getElementById("taskList");
  taskdiv.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem" + (task.done ? " done" : "");

    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    const deletButton = document.createElement("button");
    deletButton.textContent = "DELET";
    deletButton.onclick = () => deletTask(i);

    const editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.onclick = () => editTask(i);

    const doneButton = document.createElement("button");
    doneButton.textContent = "DONE";
    doneButton.onclick = () => doneTask(i);

    taskItem.appendChild(taskText);
    taskItem.appendChild(deletButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(doneButton);
    taskdiv.appendChild(taskItem);
  }
}
