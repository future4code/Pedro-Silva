import { app } from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post('/users/signup', userController.signup)