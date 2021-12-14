import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Cadastro from "../pages/Cadastro/Cadastro";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";


const Router = () => {
    return (
        <BrowserRouter>

            <Header/>

            <Routes>

                <Route path='/' element={<Login />} />

                <Route path='/signup' element={<Cadastro />} />

                <Route path='/feed' element={<Feed />} />

                <Route path='/post/:id' element={<Post />} />

                <Route path='*' element={<ErrorPage />} />

            </Routes>


        </BrowserRouter>

    )
}

export default Router