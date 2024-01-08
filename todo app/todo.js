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
    Status: "done",
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
  let doneContainer = "";
  let todoContainer = "";
  let inProgressContainer = "";
  let stuckContainer = "";

  const filteredTodo = boxArray.filter((el, i) => el.Status === "todo");
  const filteredDone = boxArray.filter((el, i) => el.Status === "done");
  const filteredInProgress = boxArray.filter(
    (el, i) => el.Status === "in progress"
  );
  const filteredStuck = boxArray.filter((el, i) => el.Status === "stuck");

  filteredTodo.forEach((el, i) => {
    todoContainer += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
  <ul><li>${el.title}</li><li>${el.Description}</li><li>${el.Status}</li><li>${
      el.Priority
    }</li>
  </ul>
  </div>`;
  });
  filteredDone.forEach((el, i) => {
    doneContainer += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
  <ul><li>${el.title}</li><li>${el.Description}</li><li>${el.Status}</li><li>${
      el.Priority
    }</li>
  </ul>
  </div>`;
  });
  filteredInProgress.forEach((el, i) => {
    inProgressContainer += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
  <ul><li>${el.title}</li><li>${el.Description}</li><li>${el.Status}</li><li>${
      el.Priority
    }</li>
  </ul>
  </div>`;
  });
  filteredStuck.forEach((el, i) => {
    stuckContainer += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
  <ul><li>${el.title}</li><li>${el.Description}</li><li>${el.Status}</li><li>${
      el.Priority
    }</li>
  </ul>
  </div>`;
  });

  document.getElementById("container-1").innerHTML = `<h3>To Do</h3>
   ${todoContainer} 
   <button onclick="show()" id="add-to-button">+ Add Card
   </button>`;
  document.getElementById("container-2").innerHTML = `<h3>Done</h3>
   ${doneContainer} <button onclick="show()" id="add-to-button">+ Add Card
   </button>`;
  document.getElementById("container-3").innerHTML = `<h3>Stuck</h3>
   ${stuckContainer} <button onclick="show()" id="add-to-button">+ Add Card
   </button>`;
  document.getElementById("container-4").innerHTML = `<h3>In progress</h3>
   ${inProgressContainer} <button onclick="show()" id="add-to-button">+ Add Card
   </button>`;
};
render();

const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  console.log(document.getElementById(boxId));
  event.target.appendChild(document.getElementById(boxId));
};

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
