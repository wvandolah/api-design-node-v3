import { Router } from 'express'
import controllers from './item.controllers'
const router = Router()

router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/list/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
