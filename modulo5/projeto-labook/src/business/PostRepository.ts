import { post } from "../model/Post"

export interface PostRepository {
    insert(post: post): Promise<post>
    getPostById(id: string): Promise<post | null>
}