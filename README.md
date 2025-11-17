## Task Management
## Setup / Run Instructions

- Install [Node.js](https://nodejs.org/) (includes npm)
- Optional: Git if cloning from a repository

### Steps to Run
1. Open terminal (Command Prompt) and navigate to the project folder.
2. Server will run at:
http://localhost:3000
3. Install Express

## Methods
| Method | Endpoint     | Description                                                                                           |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------- |
| GET    | `/`          | Root route, returns a welcome message                                                                 |
| GET    | `/health`    | Returns server health and uptime                                                                      |
| GET    | `/tasks`     | Returns all tasks as JSON                                                                             |
| GET    | `/tasks/:id` | Returns a single task by ID. If ID is invalid (not a positive integer) → 400, if task not found → 404 |
| POST   | `/tasks`     | Creates a new task (title required) – fully working with validation & persistence                     |
| GET    | `/health`    | Shows process.uptime() – confirmed working                                                            |

All responses documented in:
- `tasks-response.json` → GET /tasks result
- `api-responses.txt`   → GET /task/3, /task/999, /task/abc results