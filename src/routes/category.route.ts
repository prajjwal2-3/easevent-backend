import express from 'express'
const route = express.Router()
import { add_Category } from '../controllers/category/Category'
route.post('/addCategory', add_Category)

export default route