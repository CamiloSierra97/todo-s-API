const express = require("express");

const app = express();

app.use(express.json());

const todoRouter = require("./todos/todos.router");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

app.use("/", todoRouter)

// const database = [
//   {
//     id: 1,
//     title: "This is a title",
//     is_completed: false,
//   },
//   {
//     id: 2,
//     title: "This is another title",
//     is_completed: true,
//   },
// ];

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
