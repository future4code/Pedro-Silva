import express, { Request, Response } from "express";
import { request } from "http";
import { AddressInfo } from "net";
import { forEachChild } from "typescript";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercício 1

app.get('/ping', (req :Request, res :Response) => {
    res.status(200).send('Pong!!')
})

// Exercício 2 


type ToDoList = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}[]

// Exercício 3 

const taskList: ToDoList = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 3,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
    {
        userId: 4,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
    {
        userId: 4,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
    },
    {
        userId: 5,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
    },
    {
        userId: 5,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
    }
]

// Exercício 4 

app.get('/tasks', (req :Request, res :Response) => {
    const tasksCompleted :ToDoList = taskList.filter((t) => {
        if (t.completed === true) {return t}
    })

    res.status(200).send(tasksCompleted)
})

// Exercício 8 

app.get('/task/user', (req :Request, res :Response) => {
    const userId = Number(req.query.id)

    const userTask :ToDoList = taskList.filter((u) => {
        if (userId === u.userId) {
            return u
        }
    })

    res.status(200).send(userTask)
})

// Exercício 5 

app.post('/addtask',(req :Request, res: Response) => {
    const {title, completed} = req.body
    taskList.push({
        userId: Date.now(),
        id: taskList.length + 1,
        title,
        completed
    })

    res.status(200).send(taskList)
})

// Exercício 6

app.put('/checktask/:id', (req: Request, res: Response) => {
    const taskIdtoChange = Number(req.params.id)

    taskList.forEach((task: any) => {
        if(taskIdtoChange === task.id) {
            if (task.completed === true) {
                return task.completed = false
            } else {
                return task.completed = true
            }
        }
    })
    res.status(200).send(taskList)
})

// Exercício 7

app.delete('/delete', (req: Request, res: Response) => {
    const idToDelete = Number(req.query.id)

    taskList.forEach((task:any, index:any) =>{
        if(task.id === idToDelete) {
            return taskList.splice(index, 1)
        }
    })

    res.status(200).send(taskList)
})

// Exercício 8

// https://documenter.getpostman.com/view/18388200/UVe9SVKm

