import { log } from "./utils";
import "./todos.css";

const todos = [
  { title: "Html", isDone: false },
  { title: "Css", isDone: false },
  { title: "JavaScript", isDone: false },
];

const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");
const $todos = document.querySelector("#todos");

const printTodos = () => {
  const html = todos.map((todo, index) => {
    return `
    <li data-index="${index}">
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked" />
    <span class="text">${todo.title}</span>
    </li>
    `;
  });

  $todos.innerHTML = `<ul>${html.join("")}</ul>`;
};

const checkTodo = (e) => {
  e.preventDefault();
  console.log($input.value);

  //todo 추가
  const todo = { title: $input.value, isDone: false };
  todos.push(todo);
  console.log(todos);

  //input 초기화
  $input.value = "";

  //todos 출력
  printTodos();
};

// 폼에 입력 이벤트 추가하기, 입력했을 때 todo 추가
$form.addEventListener("submit", checkTodo);

const deleteTodo = (index) => {
  console.log("delete", index);
  //todos에서 index번째 삭제
  todos.splice(index, 1);
  printTodos();
};
const toggleTodo = () => {
  console.log("toggle");
};

//삭제
document.body.addEventListener("click", (e) => {
  const index = parseInt(e.target.parentNode.dataset.index);
  if (e.target.className === "delete") {
    deleteTodo(index);
  } else if (e.target.className === "toggle-checked") {
    toggleTodo();
  }
});

//todos 출력
printTodos();
// todos 뿌려주기
