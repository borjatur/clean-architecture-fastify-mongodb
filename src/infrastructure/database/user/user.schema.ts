import { Schema } from 'mongoose'
import { type User } from '@core/entities/user'

export const userSchema = new Schema<User>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true }
}, {
  timestamps: false,
  versionKey: false,
  id: true,
  toJSON: {
    transform (doc, ret) {
      ret.id = ret._id
      delete ret._id
    }
  }
})
