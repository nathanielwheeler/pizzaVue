import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  body: { type: String, required: true },
  postId: { type: ObjectId, ref: 'posts', required: true },
  user: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('comment', _model)
  }
}