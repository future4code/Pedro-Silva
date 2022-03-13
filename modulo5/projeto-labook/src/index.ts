import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

const userController = new UserController()
const postController = new PostController()

app.post('/users/signup', userController.signup)
app.post('/users/login', userController.login)
app.post('/users/friend', userController.createFriendship)
app.delete('/users/friend', userController.deleteFriendship)

app.get('/posts/:id', postController.getPostById)
app.post('/posts/create', postController.createPost)