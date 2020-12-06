const createError = require('http-errors');
const Post = require('../models/Post');

class PostController {

    // [POST] /createPost
    async create(req, res, next) {
        try {
            const {
                title,
                body
            } = req.body;

            if (!title || !body) {
                return next(createError(422, 'Vui lòng nhập tiêu đề và nội dung.'));
            }

            req.user.password = undefined;

            const newPost = new Post({
                title,
                body,
                postedBy: req.user
            });

            await newPost.save();

            res.json({newPost});
        } catch (error) {
            return next(createError(500, error));
        }
    }

    // [GET] /post
    async show(req, res, next) {
        try {
            const postList = await Post.find().populate('postedBy', '_id name');

            res.json({postList});
        } catch (error) {
            return next(createError(500, error));
        }
    }

    // [GET] /post/myPost
    async myPost(req, res, next) {
        try {
            const myPostList = await Post
                                        .find({postedBy: req.user._id})
                                        .populate('postedBy', '_id name');

            res.json({myPostList});
        } catch (error) {
            return next(createError(500, error));
        }
    }

}

module.exports = new PostController;