import { type Comment } from '@core/entities/comment'

export type CommentPayload = Omit<Comment, 'id'>
