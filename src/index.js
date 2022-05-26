import { log } from "./utils";
import "./todos.css";

const todos = [];

// 폼에 입력 이벤트 추가하기, 입력했을 때 todo 추가
const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");

const checkTodo = (e) => {
  e.preventDefault();
  console.log($input.value);

  //todo 추가
  const todo = { title: $input.value, isDone: false };
  todos.push(todo);
  console.log(todos);

  //input 초기화

  //todos 출력
};

$form.addEventListener("submit", checkTodo);

// todos 뿌려주기
