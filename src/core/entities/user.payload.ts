import { type User } from '@core/entities/user'

export type UserPayload = Omit<User, 'id'>
