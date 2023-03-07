import { type FastifyRequest, type FastifyReply } from 'fastify'
import { type IUserRepository } from '@core/repositories/user.repo'
import { userService } from '@core/services/user.svc'
import { type UserPayload } from '@core/entities/user.payload'

export const createUser = (
  userRepository: IUserRepository
) => async function (request: FastifyRequest, reply: FastifyReply) {
  const user = await userService(userRepository)
    .createUser(request.body as UserPayload)
  void reply.status(201).send(user)
}
