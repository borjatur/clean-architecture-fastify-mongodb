import { type Comment } from '@core/entities/comment'
import { type CommentPayload } from '@core/entities/comment.payload'

export interface ICommentRepository {
  createComment: (commentPayload: CommentPayload) => Promise<Comment>
  getComment: (id: string) => Promise<Comment | undefined>
  putComment: (id: string, commentPayload: CommentPayload) => Promise<Comment | undefined>
  deleteComment: (id: string) => Promise<void>
}
