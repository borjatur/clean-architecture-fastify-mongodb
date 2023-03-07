import { type ICommentRepository } from '@core/repositories/comment.repo'
import { type IUserRepository } from '@core/repositories/user.repo'
import { commentRoutes } from '@infrastructure/http/routes/comment.routes'
import { userRoutes } from '@infrastructure/http/routes/user.routes'
import { type RouteOptions } from 'fastify'

export default (
  commentRepository: ICommentRepository,
  userRepository: IUserRepository
): RouteOptions[] => ([
  ...commentRoutes(commentRepository),
  ...userRoutes(userRepository)
])
