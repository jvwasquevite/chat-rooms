import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import path from 'path'

import { router } from './routes'
import { createServer } from 'http'
import { Socket, Server } from 'socket.io'

import './database'

const app = express()
app.use(express.json())

const server = createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(router)

app.use('/', (req, res) => {
  res.render('index.html')
})

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  }
)

app.listen(3000, () => console.log('Server is running'))
