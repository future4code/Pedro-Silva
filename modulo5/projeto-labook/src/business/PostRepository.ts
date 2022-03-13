import { post, postfeed } from "../model/Post"

export interface PostRepository {
    insert(post: post): Promise<post>
    getPostById(id: string): Promise<post | null>
    getFeed(id: string): Promise<postfeed[]>
}