import { Router } from 'express'
import { UrlController } from '../controllers/url.controller'

const urlRoute = Router()
const controller = new UrlController()

urlRoute.post('/url/new', controller.create)
urlRoute.get('/url/:shortUrl', controller.visit)
urlRoute.get('/url/analytics/:shortUrl', controller.analytics)

export default urlRoute
