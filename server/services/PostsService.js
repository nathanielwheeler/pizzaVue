import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  title: { type: String, maxlength: 60, required: true },
  body: { type: String, maxlength: 120 },
  imgURL: { type: String },
  location: { type: String, required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  likeCount: { type: Number, default: 0 }
}, { timestamps: true })

export default class PostsService {
  get repository() {
    return mongoose.model('posts', _model)
  }
}