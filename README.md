Task Management GraphQL API
Overview
This project is a simple task management system implemented using GraphQL. It provides a GraphQL API for managing tasks, including functionalities for adding, retrieving, updating, completing, and deleting tasks.

Features
Add a new task with title, description, completion status, and duration.
Retrieve a single task by its ID or fetch all tasks.
Update the details of an existing task.
Mark a task as completed.
Delete a task from the system.
Technologies Used
GraphQL
Node.js
Express.js
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository_url>
Navigate to the project directory:

bash
Copy code
cd task-management-graphql-api
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server should now be running at http://localhost:PORT, where PORT is the port number specified in the configuration.

Access the GraphQL API using a GraphQL client (e.g., GraphiQL) or by sending HTTP requests to the appropriate endpoints.

Usage
Adding a Task
To add a new task, send a POST request to the /graphql endpoint with the following GraphQL mutation:

graphql
Copy code
mutation {
  addTask(title: "New Task", description: "Description of the new task", completed: false, duration: 10) {
    id
    title
    description
    completed
    duration
  }
}
Retrieving Tasks
To retrieve tasks, send a POST request to the /graphql endpoint with the following GraphQL query:

graphql
Copy code
{
  tasks {
    id
    title
    description
    completed
    duration
  }
}
Updating a Task
To update a task, send a POST request to the /graphql endpoint with the following GraphQL mutation:

graphql
Copy code
mutation {
  updateTask(id: "<task_id>", title: "Updated Title", description: "Updated Description", completed: true, duration: 20) {
    id
    title
    description
    completed
    duration
  }
}
Replace <task_id> with the ID of the task you want to update.

Completing a Task
To mark a task as completed, send a POST request to the /graphql endpoint with the following GraphQL mutation:

graphql
Copy code
mutation {
  completeTask(id: "<task_id>") {
    id
    title
    description
    completed
    duration
  }
}
Replace <task_id> with the ID of the task you want to mark as completed.

Deleting a Task
To delete a task, send a POST request to the /graphql endpoint with the following GraphQL mutation:

graphql
Copy code
mutation {
  deleteTask(id: "<task_id>") {
    id
    title
    description
    completed
    duration
  }
}
Replace <task_id> with the ID of the task you want to delete.