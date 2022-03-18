import { app } from "./app"
import  {UserController}  from "./controller/Usercontroller"

const userController = new UserController()

// app.get('/all', userController.getAllUsers)

// app.post('/signup', userController.signUp)
// app.post('/login', userController.login)

// app.delete('/user/:id', userController.deleteUser)

app.get('/users/profile/:id', userController.getUserById)


