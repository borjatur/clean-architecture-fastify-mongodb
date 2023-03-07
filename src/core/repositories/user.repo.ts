import { type User } from '@core/entities/user'
import { type UserPayload } from '@core/entities/user.payload'

export interface IUserRepository {
  createUser: (userPayload: UserPayload) => Promise<User>
}
