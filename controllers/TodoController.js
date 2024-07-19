import Todo from "../schema/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: 1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err);
  }
};

export const createTodo = async (req, res) => {
  const data = {
    text: req.body.text,
    completed: false,
  };
  try {
    const newTodo = await Todo.create(data);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err);
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);

    if (!todo) return res.status(404).json({ message: "Not Found" });

    if (todo.completed) {
      await todo.updateOne({ completed: false });
    } else {
      await todo.updateOne({ completed: true });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(201).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err);
  }
};
