import { model } from 'mongoose'
import { userSchema } from '@infrastructure/database/user/user.schema'
import { type User } from '@core/entities/user'

export const userDAO = model<User>('User', userSchema)
