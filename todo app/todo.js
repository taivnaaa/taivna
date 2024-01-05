const boxArray = [
  {
    title: "read book",
    Description: "huuhdin nom unshih",
    Status: "todo",
    Priority: "low",
  },
  {
    title: "code",
    Description: "spoj 10 bodlogo",
    Status: "doing",
    Priority: "high",
  },
  {
    title: "sleep",
    Description: "8n tsag untah",
    Status: "todo ",
    Priority: "high",
  },
];

const render = () => {
  let boxString = "";
  boxArray.forEach((el, i) => {
    boxString += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
  <ul><li>${el.title}</li><li>${el.Description}</li><li>${el.Status}</li><li>${
      el.Priority
    }</li>
  </ul>
  </div>`;
  });
  document.getElementById("container-1").innerHTML = `<h3>To Do</h3>
   ${boxString} <button onclick="show()" id="add-to-button">+ Add ToDo</button>`;
};
render();

function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
}

const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};
const hide = () => {
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
};
// const modalContainer = document.getElementsByClassName("modalContainer")[0];
// modalContainer.addEventListener("click", () => {
//   modalContainer.classList.remove("show");
// });
function addTodo() {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;

  const inputObj = {
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
}
