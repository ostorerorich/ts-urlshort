import { App } from './app'
import { PORT } from './config/config'

const app = new App(PORT || 3000)

app.listen()
