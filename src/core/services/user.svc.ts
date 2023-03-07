import { type User } from '@core/entities/user'
import { type UserPayload } from '@core/entities/user.payload'
import { type IUserRepository } from '@core/repositories/user.repo'

interface IUserService {
  createUser: (userPayload: UserPayload) => Promise<User>
}

export const userService = (
  userRepository: IUserRepository
): IUserService => ({
  createUser: async (userPayload: UserPayload): Promise<User> => {
    return await userRepository.createUser(userPayload)
  }
})
