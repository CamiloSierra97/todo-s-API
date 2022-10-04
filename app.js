const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

const database = [
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

app.get("/todos", (req, res) => {
  res.status(200).json(database);
});

app.post("/todos", (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    res.status(400).json({ message: "Missing data" });
  } else {
    database.push({
      id,
      title,
      is_completed: false,
    });
    res.status(200).json(todo);
  }
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
