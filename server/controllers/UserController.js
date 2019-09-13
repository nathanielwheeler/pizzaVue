import express from 'express'
import UserService from '../services/UserService.js';
import { Authorize } from '../middleware/authorize'
import UserFollowing from '../services/UserFollowing.js'

let _userService = new UserService().repository
let _userFollowingService = new UserFollowing().repository


//PUBLIC
export default class UserController {
    constructor() {
        this.router = express.Router()
            //NOTE This route will require a query param, the client will make a request to '/api/users/find?name=Larry'
            .get('/find', this.findUserByQuery)
            .use(Authorize.authenticated)
            .post('/following/:id', this.followUser)
            .get('/:id/followers', this.getFollowers)
            .get('/:id/following', this.getFollowing)
            .delete('/:id/followers', this.unfollow)


    }

    async findUserByQuery(req, res, next) {
        try {
            let users = await _userService.find(req.query).select('name email')
            res.send(users)
        } catch (error) { next(error) }
    }
    async followUser(req, res, next) {
        try {
            let following = await _userFollowingService
                .create({ follower: req.session.uid, following: req.params.id })
            res.send(following)
        } catch (error) { next(error) }


    }
    async getFollowers(req, res, next) {
        try {
            let following = await _userFollowingService.find({ follower: req.params.id }).populate('following', "name email")
            res.send(following)
        } catch (error) {

        }
    }
    async getFollowing(req, res, next) {
        try {
            let followers = await _userFollowingService.find({ following: req.session.uid }).populate('following', "name email")
            res.send(followers)
        } catch (error) {

        }
    }
    async unfollow(req, res, next) {
        try {
            let deleted = await _userFollowingService.findOneAndDelete({ following: req.params.id, follower: req.session.uid })
            res.send(deleted)
        } catch (error) {

        }
    }

    // async findUserByQuery(req, res, next) {
    //     try {
    //         let users = await _userService.find(req.query).select('name email')
    //         res.send(users)
    //     } catch (error) { next(error) }
    // }
}


