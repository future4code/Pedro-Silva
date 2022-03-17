import { comment, dislike, like, post, postfeed, POST_TYPES } from "../model/Post"

export interface PostRepository {
    insert(post: post): Promise<post>
    getPostById(id: string): Promise<post | null>
    getFeed(id: string, offset: number): Promise<postfeed[]>
    getFeedByType(id: string, type: POST_TYPES): Promise<postfeed[]>
    like(like: like): Promise<like>
    dislike(dislike: dislike): Promise<dislike>
    comment(comment: comment): Promise<comment>
}