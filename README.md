# <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs" target="_blank">Challenge 01</a>

## API ROUTES

### READ - GET

- /projects - List all the projects
- /projects/{project_id} - Show only one project

### CREATE - POST

- /projects - Creates a project when a request body like below is passed

```json
"id": "1",
"title: "Tindev",
"tasks": [
    "Create backend", "Create frontend", "Create mobile"
]
```

- /projects/{project_id}/tasks - Creates a task inside the project which the id was passed as a route param when a request body with "title" is passed

```json
"title": "Become a Full Stack JS Developer!"
```

### UPDATE - PUT

- /projects/{project_id} - Updates the project which the id was passed as a route param

### DELETE

- /projects/{project_id} - Updates the project which the id was passed as a route param

Thanks for this experience and learning RocketSeat! :rocket:
