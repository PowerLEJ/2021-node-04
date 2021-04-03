const multer = require('multer')
const path = require('path')
const fs = require('fs-extra')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')

const allowImgExt = ['jpg', 'jpeg', 'png', 'gif']
const allowFileExt = ['txt', 'pdf', 'ppt', 'pptx', 'doc', 'docx', 'zip', 'xls', 'xlsx']
const allowExt = [...allowImgExt, ...allowFileExt]

// 폴더 만드는 것
const destCb = (req, file, cb) => {
	let folder = path.join(__dirname, '../storages', moment().format('YYYYMMDD_HH'))
	fs.ensureDirSync(folder) // 폴더가 존재하면 패스, 없으면 만들고...(fs-extra) // trycatch X 에러를 토해내지 않음 리턴값이 없으니까
	cb(null, folder)
}

// 파일 만드는 것
const fileCb = (req, file, cb) => {
	let ext = path.extname(file.originalname) // extname은 .jpg 처럼 점을 포함한 확장자이름
	let name = moment().format('YYYYMMDD_HH') + '-' + uuidv4() + ext
	cb(null, name)
}

const fileFilter = (req, file, cb) => {
	let ext = path.extname(file.originalname).substr(1).toLowerCase() // substr은 점을 버리기 위해 넣음
	if(allowExt.includes(ext)) {
		cb(null, true)
	} else {
		req.banExt = ext
		cb(null, false)
	}
}

const limits = { fileSize: 102400000 }

const storage = multer.diskStorage({ destination: destCb, filename: fileCb})
const upload = multer({ storage, fileFilter, limits })

module.exports = { upload, allowExt, allowImgExt, allowFileExt }