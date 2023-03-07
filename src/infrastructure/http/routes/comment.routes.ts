import { type RouteOptions, type RouteHandlerMethod } from 'fastify'
import {
  createComment,
  getComment,
  putComment,
  deleteComment
} from '@infrastructure/http/controllers/comment.ctrl'
import { type ICommentRepository } from '@core/repositories/comment.repo'
import {
  postCommentSchema,
  getCommentSchema,
  putCommentSchema,
  deleteCommentSchema
} from '@infrastructure/http/schemas/comment.schemas'

export const commentRoutes = (commentRepository: ICommentRepository): RouteOptions[] => ([
  {
    method: 'POST',
    url: '/comments',
    schema: postCommentSchema,
    handler: createComment(commentRepository)
  },
  {
    method: 'GET',
    url: '/comments/:id',
    schema: getCommentSchema,
    handler: getComment(commentRepository) as RouteHandlerMethod
  },
  {
    method: 'PUT',
    url: '/comments/:id',
    schema: putCommentSchema,
    handler: putComment(commentRepository) as RouteHandlerMethod
  },
  {
    method: 'DELETE',
    url: '/comments/:id',
    schema: deleteCommentSchema,
    handler: deleteComment(commentRepository) as RouteHandlerMethod
  }
])
