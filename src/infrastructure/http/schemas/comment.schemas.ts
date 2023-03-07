import { type FastifySchema } from 'fastify'
import { Type, type Static } from '@sinclair/typebox'
import { notFoundSchema } from '@infrastructure/http/schemas/error.schemas'

export const Comment = Type.Object({
  id: Type.Optional(Type.String()),
  content: Type.String(),
  authorId: Type.String()
})

export type CommentType = Static<typeof Comment>

const CommentParams = Type.Object({
  id: Type.String({ description: 'Comment Id' })
})

export type CommentParamsType = Static<typeof CommentParams>

export const UserPayload = Type.Intersect([
  Comment,
  Type.Object({})
], {
  examples: [{
    content: 'This is a random comment!',
    authorId: '64cd0e4be59031edffa39f5c'
  }]
})

export const CommentResponse = Type.Intersect([
  Comment,
  Type.Object({
  })
], {
  examples: [{
    id: '63cd0e4be59031edffa39f5c',
    content: 'This is a random comment!',
    authorId: '64cd0e4be59031edffa39f5c'
  }]
})

export const postCommentSchema: FastifySchema = {
  description: 'Create a new comment',
  tags: ['comments'],
  summary: 'Creates new comment',
  body: UserPayload,
  response: {
    201: { ...CommentResponse, description: 'Success' }
  }
}

export const getCommentSchema: FastifySchema = {
  description: 'Gets a single comment',
  tags: ['comments'],
  summary: 'Gets comment by Id',
  params: CommentParams,
  response: {
    200: { ...CommentResponse, description: 'Success' },
    404: { ...notFoundSchema, description: 'Not found' }
  }
}

export const putCommentSchema: FastifySchema = {
  description: 'Updates existing comment',
  tags: ['comments'],
  summary: 'Updates comment by Id',
  params: CommentParams,
  body: Comment,
  response: {
    200: { ...CommentResponse, description: 'Success' },
    404: { ...notFoundSchema, description: 'Not found' }
  }
}

const deleteResponse = Type.Object({
  statusCode: Type.Number({ example: 204 }),
  message: Type.String({ example: 'No Content' })
})

export const deleteCommentSchema: FastifySchema = {
  description: 'Deletes a single comment',
  tags: ['comments'],
  summary: 'Deletes comment by Id',
  params: CommentParams,
  response: {
    204: {
      ...deleteResponse,
      description: 'No Content'
    }
  }
}
