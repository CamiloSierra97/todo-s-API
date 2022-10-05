const { v4 } = require("uuid");

const todoDB = [
  {
    id: 1,
    title: "This is a title",
    is_completed: false,
  },
  {
    id: 2,
    title: "This is another title",
    is_completed: true,
  },
];

const uuid = require("uuid");

const getAllTodos = () => {
  return todoDB;
};

const getTodoById = (id) => {
  const data = todoDB.find((todo) => todo.id === id);
  return data;
};

const createTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    is_completed: false,
  };
  todoDB.push(newTodo);
  return newTodo;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
};
