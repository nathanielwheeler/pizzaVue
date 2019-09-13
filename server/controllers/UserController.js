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
        } catch (error) { next(error) }


    }
    // async findUserByQuery(req, res, next) {
    //     try {
    //         let users = await _userService.find(req.query).select('name email')
    //         res.send(users)
    //     } catch (error) { next(error) }
    // }
}


