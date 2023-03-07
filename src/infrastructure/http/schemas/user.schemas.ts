import { type FastifySchema } from 'fastify'
import { Type, type Static } from '@sinclair/typebox'
// import { notFoundSchema } from '@infrastructure/http/schemas/error.schemas'

export const User = Type.Object({
  id: Type.Optional(Type.String()),
  firstname: Type.String(),
  lastname: Type.String(),
  phoneNumber: Type.String(),
  email: Type.String()
})

export type UserType = Static<typeof User>

export const UserPayload = Type.Intersect([
  User,
  Type.Object({})
], {
  examples: [{
    firstname: 'john',
    lastname: 'doe',
    phoneNumber: '+1-202-555-0170',
    email: 'john.doe@gmail.com'
  }]
})

export const UserResponse = Type.Intersect([
  User,
  Type.Object({
  })
], {
  examples: [{
    id: '63cd0e4be59031edffa39f5c',
    firstname: 'john',
    lastname: 'doe',
    phoneNumber: '+1-202-555-0170',
    email: 'john.doe@gmail.com'
  }]
})

export const postUserSchema: FastifySchema = {
  description: 'Create a new user',
  tags: ['users'],
  summary: 'Creates new user with given values',
  body: UserPayload,
  response: {
    201: { ...UserResponse, description: 'Success' }
  }
}
