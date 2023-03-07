import { model } from 'mongoose'
import { commentSchema } from '@infrastructure/database/comment/comment.schema'
import { type Comment } from '@core/entities/comment'

export const commentDAO = model<Comment>('Comment', commentSchema)
