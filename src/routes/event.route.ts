import express from 'express'
const route = express.Router()
import { add_User } from '../controllers/user/add_User'
route.post('/addEvent', add_User)