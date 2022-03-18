import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import { UserController } from "./controller/UserController"

const userController =  new UserController()

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

