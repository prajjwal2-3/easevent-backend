import express from 'express'
const route = express.Router()
import { add_Event, delete_all_Event } from '../controllers/event/Event'
route.post('/addEvent', add_Event)
route.post('/deleteallEvent',delete_all_Event)
export default route