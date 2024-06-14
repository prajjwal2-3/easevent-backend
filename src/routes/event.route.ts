import express from 'express'
const route = express.Router()
import { add_Event } from '../controllers/event/Event'
route.post('/addEvent', add_Event)

export default route