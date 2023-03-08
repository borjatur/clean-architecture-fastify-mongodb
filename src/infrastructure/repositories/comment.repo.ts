import { type Comment } from '@core/entities/comment'
import { type CommentPayload } from '@core/entities/comment.payload'
import { type ICommentRepository } from '@core/repositories/comment.repo'
import { commentDAO } from '@infrastructure/database/comment/comment.dao'

export class CommentRepository implements ICommentRepository {
  async createComment (commentPayload: CommentPayload): Promise<Comment> {
    return await commentDAO.create(commentPayload)
  }

  async getComment (id: string): Promise<Comment | undefined> {
    const comment = await commentDAO.findById(id)
    if (comment) {
      return comment
    }
  }

  async putComment (id: string, commentPayload: CommentPayload): Promise<Comment | undefined> {
    const comment = await commentDAO.findByIdAndUpdate(id, commentPayload, { new: true })
    if (comment) {
      return comment
    }
  }

  async deleteComment (id: string): Promise<void> {
    await commentDAO.findByIdAndDelete(id)
  }
}
