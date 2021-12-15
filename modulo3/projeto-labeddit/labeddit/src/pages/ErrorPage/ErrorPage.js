import useProtectedPage from "../../hooks/useProtectedPage";

const ErrorPage = () => {
    useProtectedPage()
    return (
        <div>
            <h2>Error</h2>
        </div>
    )


}

export default ErrorPage;