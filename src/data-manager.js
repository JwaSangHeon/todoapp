const savedData = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const loadData = (callback) => {
  const dataString = localStorage.getItem("todos") || "[]";
  return JSON.parse(dataString);
  // fetch("http://localhost:3000/todos")
  //   .then((res) => res.json())
  //   .then((data) => callback(data));
};

export { savedData, loadData };
