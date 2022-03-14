import { join } from "path";
import { PostRepository } from "../business/PostRepository";
import { comment, dislike, like, post, postfeed, POST_TYPES } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase implements PostRepository {
    protected TABLE_P = 'labook_posts'
    protected TABLE_F = 'labook_friends'
    protected TABLE_U = 'labook_users'
    protected TABLE_L = 'labook_likes'
    protected TABLE_C = 'labook_comments'

    insert = async (post: post) => {

        await BaseDatabase.connection(this.TABLE_P)
            .insert(post)

        return post
    }

    getPostById = async (id: string) => {
        const result = await BaseDatabase.connection(this.TABLE_P)
            .select()
            .where({ id })

        return result[0]
    }

    getFeed = async (id: string, offset: number) => {
        const result: postfeed[] = await BaseDatabase.connection(this.TABLE_P)
            .join('labook_friends', 'labook_posts.author_id', '=', 'labook_friends.u_friend')
            .join('labook_users', 'labook_friends.u_friend', '=', 'labook_users.id')
            .select('labook_users.name', 'labook_posts.photo', 'labook_posts.description'
                , 'labook_posts.created_at', 'labook_posts.type')
            .where('labook_friends.user_add', id)
            .orderBy('labook_posts.created_at', 'desc')
            .limit(5)
            .offset(offset)

        return result
    }

    getFeedByType = async (id: string, type: POST_TYPES) => {
        const result: postfeed[] = await BaseDatabase.connection(this.TABLE_P)
            .join('labook_friends', 'labook_posts.author_id', '=', 'labook_friends.u_friend')
            .join('labook_users', 'labook_friends.u_friend', '=', 'labook_users.id')
            .select('labook_users.name', 'labook_posts.photo', 'labook_posts.description'
                , 'labook_posts.created_at', 'labook_posts.type')
            .where('labook_friends.user_add', id)
            .andWhere('labook_posts.type', type)
            .orderBy('labook_posts.created_at', 'desc')

        return result
    }

    like = async (like: like) => {

        await BaseDatabase.connection(this.TABLE_L)
            .insert(like)

        return like
    }

    dislike = async (dislike: dislike) => {
        await BaseDatabase.connection(this.TABLE_L)
            .where(dislike)
            .delete()

        return dislike
    }

    comment = async (comment: comment) => {
        await BaseDatabase.connection(this.TABLE_C)
            .insert(comment)

        return comment
    }




}