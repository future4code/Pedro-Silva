import { app } from "./app"
import  {UserController}  from "./controller/Usercontroller"

const userController = new UserController()

app.post('/signup', userController.signUp)


