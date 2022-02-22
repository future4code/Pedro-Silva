import app from "./app"
import createUser from './endpoints/createUser'
import getUserLog from "./endpoints/getUserLog"
import { login } from "./endpoints/login"


app.get('/user/profile', getUserLog)
app.post('/user/signup', createUser)
app.post('/user/login', login)