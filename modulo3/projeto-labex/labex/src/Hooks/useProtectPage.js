import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const useProtectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token === null) (
            history.push('/login')
        )

    }, [history])
}

export default useProtectPage