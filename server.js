import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "./controllers/TodoController.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", getTodos);
app.post("/todos", createTodo);
app.put("/todos/:id", updateTodo);
app.delete("/todos/:id", deleteTodo);

export default app;
