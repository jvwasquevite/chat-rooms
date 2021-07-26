import express from 'express'
import path from 'path'

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

app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(3000, () => console.log('Server is running'))
