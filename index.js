import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
