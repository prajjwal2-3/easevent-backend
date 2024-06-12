import express from 'express'
const route = express.Router()
import { add_User,find_User } from '../controllers/user/add_User'
route.post('/addUser', add_User)
route.post('/findUser',find_User)

export default route