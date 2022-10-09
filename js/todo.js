const toDoForm = document.querySelectorAll(".todo-form");
const toDo = document.querySelectorAll(".todo");
const toDoList = document.querySelectorAll(".todo-list");

for (let i = 0; i < toDoForm.length; i++) {
  const TODOS_KEY = "todos";

  let toDos = [];

  function saveToDos() {
    localStorage.setItem(`todos${i}`, JSON.stringify(toDos));
  }

  function handleCheck(event) {
    const li = event.target.parentElement;
    const check = li.querySelector(".check");
    const text = li.querySelector(".todo-text");

    if (check.checked === true) {
      text.classList.add("text-style");
    } else {
      text.classList.remove("text-style");
    }
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDoText) => toDoText.id !== parseInt(li.id));
    saveToDos();
  }

  function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const input = document.createElement("input");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");

    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "check");
    span.setAttribute("class", "todo-text");
    button.setAttribute("class", "todo-button");

    button.innerText = "❌";

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newToDo.text;

    input.addEventListener("click", handleCheck);
    button.addEventListener("click", deleteToDo);

    toDoList[i].appendChild(li);
  }

  function handleToDoForm(event) {
    event.preventDefault();

    if (toDoList[i].getElementsByTagName("li").length <= 5) {
      const newToDo = toDo[i].value;

      const newToDoObj = {
        text: newToDo,
        id: Date.now(),
      };

      toDo[i].value = "";

      toDos.push(newToDoObj);
      paintToDo(newToDoObj);
      saveToDos();
    } else {
      return;
    }
  }

  toDoForm[i].addEventListener("submit", handleToDoForm);

  const savedToDos = localStorage.getItem(`todos${i}`);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}
