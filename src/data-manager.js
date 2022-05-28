const savedData = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const loadData = () => {
  const dataString = localStorage.getItem("todos") || "[]";
  return JSON.parse(dataString);
};

export { savedData, loadData };
