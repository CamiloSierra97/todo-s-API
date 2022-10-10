const { v4 } = require("uuid");

const todoDB = [
  {
    id: 'f073f2eb-548a-4a0e-90d9-02529480acf5',
    title: "This is a title",
    is_completed: false,
  },
  {
    id: 'f1e0ae3b-dee6-42c6-ae95-85260d20424b',
    title: "This is another title",
    is_completed: true,
  },

];
const uuid = require("uuid");

const getAllTodos = () => {
  return todoDB;
};

const getTodoById = (id) => {
  const data = todoDB.find((task) => task.id === id);
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
