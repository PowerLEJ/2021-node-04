require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path')
const createError = require('http-errors')
const logger = require('./middlewares/logger-mw')

// Init
app.listen(process.env.PORT, () => { 
	console.log(process.env.HOST + ':' + process.env.PORT) 
})
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))
app.locals.pretty = true
app.locals.TITLE = '도서관리시스템'

// Middleware
app.use(logger('common')) // tiny, combined, common
app.use(express.json()) // post 방식으로 들어온 데이터를 req.body로 접근할 수 있다
app.use(express.urlencoded({ extended: false }))

// Router
const bookRouter = require('./routes/book-router')
const authRouter = require('./routes/auth-router')
const multerRouter = require('./routes/multer-router')

app.use('/', express.static(path.join(__dirname, './public')))
app.use('/uploads', express.static(path.join(__dirname, './storages'))) // file 업로드
app.use('/book', bookRouter)
app.use('/auth', authRouter)
app.use('/multer', multerRouter)


// Error
app.use((req, res, next) => {
	next(createError(404))
})

app.use((err, req, res, next) => {
	res.send(process.env.SERVICE == 'development' ? err : '에러')
})