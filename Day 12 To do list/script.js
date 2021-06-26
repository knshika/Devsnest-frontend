const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}
function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "2px dashed #ccc";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
}

// Modal starts

const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".closeModal");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("yes");
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});
close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Create todo list

{
  /* <div class="todo" draggable="true">
          Do THA 13
          <span class="close"> &times; </span>
        </div> */
}

const todo_submit = document.getElementById("todo_submit");
// const no_status = document.getElementById("no_status");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  if (input_val !== "") {
    todo_div.innerText = input_val;
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    const span = document.createElement("span");
    span.classList.add("close");
    span.innerText = "\u00D7";

    span.addEventListener("click", () => {
      span.parentElement.style.display = "none";
    });

    todo_div.appendChild(span);

    no_status.appendChild(todo_div);

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    document.getElementById("todo_input").value = "";
    todo_create.classList.remove("active");
    overlay.classList.remove("active");
  }

  // console.log(todo_div);
}

const close_todo = document.querySelectorAll(".close");

close_todo.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
