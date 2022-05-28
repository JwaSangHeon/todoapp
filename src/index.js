import { log } from "./utils";
import "./todos.css";
import { printTodos } from "./print-todos";
import { loadData, savedData } from "./data-manager";

const todos = loadData();

const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");

const print = () => {
  printTodos(todos);
};

const checkTodo = (e) => {
  e.preventDefault();
  if ($input.value === "") return;

  //todo 추가
  const todo = { title: $input.value, isDone: false };
  todos.push(todo);
  // console.log(todos);

  //input 초기화
  $input.value = "";

  //todos 출력
  print();
};

// 폼에 입력 이벤트 추가하기, 입력했을 때 todo 추가
$form.addEventListener("submit", checkTodo);

const deleteTodo = (index) => {
  console.log("delete", index);
  //todos에서 index번째 삭제
  todos.splice(index, 1);
  print();
};
const toggleTodo = (index) => {
  todos[index].isDone = !todos[index].isDone;
  // e.target.parentNode.className = todos[index].isDone ? "checked" : "";
  print();
};

//삭제
document.body.addEventListener("click", (e) => {
  const index = parseInt(e.target.parentNode.dataset.index);
  if (e.target.className === "delete") {
    deleteTodo(index);
  } else if (e.target.className === "toggle-checked") {
    toggleTodo(index);
  }
});

//todos 출력
print();
// todos 뿌려주기
