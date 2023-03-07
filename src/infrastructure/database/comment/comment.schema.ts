import { Schema } from 'mongoose'
// import { type Comment } from '@core/entities/comment'

export const commentSchema = new Schema({
  content: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
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
