import express from 'express'

import { addUsers, getAllUsers, oneUser } from '../controllers/user.js'

const router = express.Router()


router.get('/getAllUsers',getAllUsers)




router.post('/addUsers',addUsers)


router.get('/:id',oneUser)





export default router ;
