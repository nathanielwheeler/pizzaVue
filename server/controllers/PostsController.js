import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import PostsService from '../services/PostsService.js'
import CommentService from '../services/CommentService.js'

let _ps = new PostsService().repository
let _cs = new CommentService().repository

export default class PostsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/my-posts', this.getByUserId)
      .get('/:id', this.getById)
      .get('/user-posts/:userId', this.getUserPosts)
      .get('/:id/comments', this.getComments)
      .post('', this.create)
      // .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _ps.find({}).populate("user", "name")
      return res.send(data)
    } catch (error) { next(error) }
  }

  async getById(req, res, next) {
    try {
      let data = await _ps.findById(req.params.id).populate("user", "name")
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async getByUserId(req, res, next) {
    try {

      let data = await _ps.find({ user: req.session.uid }).populate('user', 'name')
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async getUserPosts(req, res, next) {
    try {
      let data = await _ps.find({ user: req.params.userId }).populate('user', 'name')
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async getComments(req, res, next) {
    try {
      let data = await _cs.find({ postId: req.params.id })
        .populate('comment')
        .populate('user', 'name')
      return res.send(data)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      req.body.user = req.session.uid
      let data = await _ps.create(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  // async edit(req, res, next) {
  //   try {
  //     let data = await _ps.findOneAndUpdate({ _id: req.params.id, user: req.session.uid }, req.body, { new: true }).populate('user', 'name')
  //     if (data) {
  //       return res.send(data)
  //     }
  //     throw new Error("Invalid Id")
  //   } catch (error) { next(error) }
  // }

  async delete(req, res, next) {
    try {
      let data = await _ps.findOneAndRemove({ _id: req.params.id, user: req.session.uid })
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send("Delete Blog Post")
    } catch (error) { next(error) }

  }

}