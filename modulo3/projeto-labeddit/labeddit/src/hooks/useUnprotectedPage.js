import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToFeed } from "../routes/cordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) (
            goToFeed(navigate)
        )

    }, [navigate])
}

export default useUnprotectedPage;