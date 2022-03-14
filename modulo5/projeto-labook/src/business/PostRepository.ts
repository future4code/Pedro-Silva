import { post, postfeed, POST_TYPES } from "../model/Post"

export interface PostRepository {
    insert(post: post): Promise<post>
    getPostById(id: string): Promise<post | null>
    getFeed(id: string): Promise<postfeed[]>
    getFeedByType(id: string, type: POST_TYPES): Promise<postfeed[]>
}