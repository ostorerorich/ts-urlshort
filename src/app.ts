import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import urlRoute from './routes/url.route'
import AppData from './config/data-source'

export class App {
  public express: express.Application
  public port: number

  constructor(port: number) {
    this.express = express()
    this.port = port

    AppData.initialize()

    this.initializeMiddlewares()
  }

  private initializeMiddlewares(): void {
    this.express.use(express.json())
    this.express.use(morgan('dev'))
    this.express.use(cors())
    this.express.use(express.urlencoded({ extended: true }))

    this.express.use('/api', urlRoute)
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}
