import useProtectedPage from "../../hooks/useProtectedPage";



const Post = () => {
    useProtectedPage()

    return (
        <div>
            <h2>Post</h2>
        </div>
    )

}

export default Post;