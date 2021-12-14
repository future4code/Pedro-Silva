export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToPost = (navigate) => {
    navigate('/post/:id')
}

export const goToBackPage = (navigate) => {
    navigate(-1)
}

