const express = require("express");
const Task = require("./task")
const app = express()


app.use(express.json());
const port = 3000;


const tasks = []

app.post("/tasks", (request, response) => {
    const { name, assignee, time, creator } = request.body;

    const task = new Task({ name, creator, assignee, time })
    tasks.push(task)

    return response.status(201).json(task)
})

app.get("/tasks", (_, response) => {
    return response.status(200).json(tasks)
})




app.listen(port, () => console.log(`Servidor Rodando na porta: ${port}`))
