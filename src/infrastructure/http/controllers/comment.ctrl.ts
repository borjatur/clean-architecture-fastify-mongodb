import { type FastifyRequest, type FastifyReply } from 'fastify'
import { type ICommentRepository } from '@core/repositories/comment.repo'
import { commentService } from '@core/services/comment.svc'
import { type CommentPayload } from '@core/entities/comment.payload'
import { type CommentParamsType } from '@infrastructure/http/schemas/comment.schemas'

export const createComment = (
  commentRepository: ICommentRepository
) => async function (request: FastifyRequest, reply: FastifyReply) {
  const comment = await commentService(commentRepository)
    .createComment(request.body as CommentPayload)
  void reply.status(201).send(comment)
}

export const getComment = (
  commentRepository: ICommentRepository
) => async function (request: FastifyRequest<{ Params: CommentParamsType }>, reply: FastifyReply) {
  const id = request.params.id
  const comment = await commentService(commentRepository)
    .getComment(id)
  if (comment) {
    return await reply.status(200).send(comment)
  }
  return await reply.status(404).send({
    statusCode: 404,
    error: 'Not Found',
    message: 'Not Found'
  })
}

export const putComment = (
  commentRepository: ICommentRepository
) => async function (request: FastifyRequest<{ Params: CommentParamsType }>, reply: FastifyReply) {
  const { id } = request.params
  const comment = await commentService(commentRepository)
    .putComment(id, request.body as CommentPayload)
  if (comment) {
    return await reply.status(200).send(comment)
  }
  return await reply.status(404).send({
    statusCode: 404,
    error: 'Not Found',
    message: 'Not Found'
  })
}

export const deleteComment = (
  commentRepository: ICommentRepository
) => async function (request: FastifyRequest<{ Params: CommentParamsType }>, reply: FastifyReply) {
  const { id } = request.params
  await commentService(commentRepository)
    .deleteComment(id)
  return await reply.status(204).send()
}
