import express from 'express'

import { createComment, deleteComment, getComment, getComments, updateComment } from '../controllers/comment.controller'

import verifyJwt, { verifyAdmin } from '../middlewares/verifyJwt'

const commentRoute = express.Router()

commentRoute.post('/', verifyJwt, verifyAdmin, createComment)
commentRoute.put('/:commentId', verifyJwt, verifyAdmin, updateComment)
commentRoute.delete('/:commentId', verifyJwt, verifyAdmin, deleteComment)
commentRoute.get('/:commentId', verifyJwt, getComment)
commentRoute.get('/video/:videoId', verifyJwt, getComments)

export default commentRoute
