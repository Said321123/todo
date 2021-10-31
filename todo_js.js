let input = document.querySelector("#input");
let addTask = document.querySelector("#addBtn");
let tasks = document.querySelector("#tasks");
//[{text: 'Daaaa', completed: false}]
let tasksArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

function said() {
  tasks.innerHTML = "";
  tasksArray.forEach((element, i) => {
    tasks.innerHTML += `<div class="task ${element.completed && "completed"}">
        ${element.text}
        <div class="bnts">
          <input id='${i}' type="checkbox" ${element.completed && "checked"}/>
          <img
            id='${i}delete-btn'
            class="delete-btn"
            src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
          />
        </div>
      </div>`;
  });
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
said();

addTask.addEventListener("click", () => {
  tasksArray.push({ text: input.value, completed: false });

  said();
});

tasks.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    tasksArray[e.target.id].completed = !tasksArray[e.target.id].completed;
    said();
  } else if (e.target.className === "delete-btn") {
    tasksArray.splice(e.target.id[0], 1);
    said();
  }
});
