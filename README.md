# Todo Server

### Configuration

Create a `.env` file in the root directory with the following enviromental variables:

- **PORT**: The port the server runs on (default: 8000)
- **MONGO_URI**: The URI for the database connection

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Access the application at `http://localhost:8000`.

### Todo Endpoints:

- **GET** `/todos` - Get all todos
- **POST** `/todos` - Create a new todo
- **PUT** `/todos/:id` - Update todo by ID
- **DELETE** `/todos/:id` - Delete todo by ID
