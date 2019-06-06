import * as mongoose from 'mongoose';
import * as express from 'express'

mongoose.connect('mongodb://localhost/mongoose1', {useNewUrlParser: true});

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/hello', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    router.get('/collections', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    this.express.use('/', router)
  }
}

export default new App().express