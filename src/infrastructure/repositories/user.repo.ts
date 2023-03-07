import { type User } from '@core/entities/user'
import { type UserPayload } from '@core/entities/user.payload'
import { type IUserRepository } from '@core/repositories/user.repo'
import { userDAO } from '@infrastructure/database/user/user.dao'

export class UserRepository implements IUserRepository {
  async createUser (userPayload: UserPayload): Promise<User> {
    return await userDAO.create(userPayload)
  }
}
