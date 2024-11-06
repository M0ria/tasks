import { Router, Request, Response } from "express"
import { Task } from "../entities/task";
import { request } from "node:http";

const router = Router()

const tasks: Task[] = []

router
    .post("/tasks", (req: Request, res: Response) => {
        const { name, assignee, time, creator } = req.body;

        const task = new Task({ name, creator, assignee, time })
        tasks.push(task)

        res.status(201).json(task)
    })
    .get("/tasks", (_: Request, res: Response) => {
        res.status(200).json(tasks)
    })
    .put("/tasks/:id", (req: Request, res: Response) => {
        const { id } = req.params
        console.log(id)
        res.status(200).json(tasks)
    })
    .get("/tasks/:id", (_: Request, res: Response) => {
        const { id } = _.params;
        const task =  tasks.find((task) => task.id === id)
        console.log(task);
        res.status(200).json(tasks)

    })

    .delete("/tasks/:id", (req: Request, res: Response) => {
        const { id } = req.params
        const indexTask =  tasks.findIndex((task) => task.id === id)
        
        tasks.splice(indexTask,1)
        res.status(200).json(tasks)
    })

export { router }

//                       0        1        2         3
//const tasks_legais = [{id:'a'},{id:'b'},{id:'c'},{id:'d'}]