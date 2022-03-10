import { PostRepository } from "../business/PostRepository";
import { post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase implements PostRepository{
    protected TABLE_NAME = 'labook_posts'

    insert = async (post: post) => {

        await BaseDatabase.connection(this.TABLE_NAME)
            .insert(post)

        return post
    }

    getPostById = async (id: string) => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({id})

        return result[0]
    }
}