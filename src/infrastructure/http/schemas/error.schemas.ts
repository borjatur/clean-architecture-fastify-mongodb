import { Type } from '@sinclair/typebox'

export const notFoundSchema = Type.Object({
  statusCode: Type.Number({ example: 404 }),
  error: Type.String({ example: 'Not found' }),
  message: Type.String({ example: 'Not found' })
})

export const badRequestSchema = Type.Object({
  statusCode: Type.Number({ example: 400 }),
  error: Type.String({ example: 'Bad Request' }),
  message: Type.String({ example: 'body/status must be equal to one of the allowed values' })
})

export const unauthorizedSchema = Type.Object({
  statusCode: Type.Number({ example: 401 }),
  error: Type.String({ example: 'Unauthorized' }),
  message: Type.String({ example: 'Unauthorized' })
})

export const forbiddenSchema = Type.Object({
  statusCode: Type.Number({ example: 403 }),
  error: Type.String({ example: 'Forbidden' }),
  message: Type.String({ example: 'Forbidden' })
})

export const preconditionFailed = Type.Object({
  statusCode: Type.Number({ example: 412 }),
  error: Type.String({ example: 'Precondition Failed' }),
  message: Type.String({ example: 'Precondition Failed' })
})
