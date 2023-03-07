// const commentSchema = new Schema({
//   content: { type: String, required: true },
//   authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
// });

export interface Comment {
  id: string
  content: string
  authorId: string
};
