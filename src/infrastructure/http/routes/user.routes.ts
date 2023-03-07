import { type RouteOptions } from 'fastify'
import { createUser } from '@infrastructure/http/controllers/user.ctrl'
import { type IUserRepository } from '@core/repositories/user.repo'
import { postUserSchema } from '@infrastructure/http/schemas/user.schemas'

export const userRoutes = (userRepository: IUserRepository): RouteOptions[] => ([
  {
    method: 'POST',
    url: '/users',
    schema: postUserSchema,
    handler: createUser(userRepository)
  }
])
