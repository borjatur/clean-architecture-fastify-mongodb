import { type Comment } from '@core/entities/comment'
import { type CommentPayload } from '@core/entities/comment.payload'
import { type ICommentRepository } from '@core/repositories/comment.repo'

interface ICommentService {
  createComment: (commentPayload: CommentPayload) => Promise<Comment>
  getComment: (id: string) => Promise<Comment | undefined>
  putComment: (id: string, commentPayload: CommentPayload) => Promise<Comment | undefined>
  deleteComment: (id: string) => Promise<void>
}

export const commentService = (
  commentRepository: ICommentRepository
): ICommentService => ({
  createComment: async (commentPayload: CommentPayload): Promise<Comment> => {
    return await commentRepository.createComment(commentPayload)
  },
  getComment: async (id: string): Promise<Comment | undefined> => {
    return await commentRepository.getComment(id)
  },
  putComment: async (id: string, commentPayload: CommentPayload): Promise<Comment | undefined> => {
    return await commentRepository.putComment(id, commentPayload)
  },
  deleteComment: async (id: string): Promise<void> => {
    await commentRepository.deleteComment(id)
  }
})
