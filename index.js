const express = require('express');

const server = express();

server.use(express.json());

const projects = [{ id: '0', title: 'Tindev', tasks: [] }];

var counter = 0;

//Middleware that checks id a project exists
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  console.log(id);

  const project = projects.find(project => project.id == id);

  console.log(project);

  if (!project) {
    return res.status(404).json({ error: 'Could not find project' });
  }

  return next();
}

//Global middleware that counts how many requests were made
server.use((req, res, next) => {
  counter++;
  console.log('Number of request untill now: ', counter);

  return next();
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  return res.json(project);
});

server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body;

  const project = { id, title, tasks };

  projects.push(project);

  return res.json(projects);
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(title);

  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.title = title;

  return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  const index = projects.indexOf(project);

  projects.splice(index, 1);

  return res.json(projects);
});

server.listen(3000);
