export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
}

export type PostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES
}

export type postfeed = {
    name: string,
    photo: string,
    description: string,
    created_at: Date,
    type: POST_TYPES
}

export type like = {
    id: string,
    postLiked: string,
    userLiked: string
}

export type dislike = {
    postLiked: string,
    userLiked: string
}

export type comment = {
    id: string,
    post_co: string,
    user_co: string,
    comment: string
}