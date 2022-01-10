import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";


const Router = ({setRightButtonText}) => {
    return (
        <Routes>

            <Route path='/' element={<Login setRightButtonText={setRightButtonText} />} />

            <Route path='/signup' element={<Cadastro setRightButtonText={setRightButtonText} />} />

            <Route path='/feed' element={<Feed />} />

            <Route path='/post/:id' element={<Post />} />

            <Route path='*' element={<ErrorPage />} />

        </Routes>
    )
}

export default Router