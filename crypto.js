const crypto = require('crypto')
const bcrypt = require('bcrypt')

let pass = '1111'
let salt = 'sdf###$$s^^df'
let sha512 = crypto.createHash('sha512').update(pass+salt).digest('base64')
let sha5122 = crypto.createHash('sha512').update(pass+salt).digest('base64')
console.log(pass);
console.log(sha512);
console.log(sha5122);

let hash
const genPass = async () => {
	hash = await bcrypt.hash(pass, 7)
	console.log(hash);
}
const comparePass = async () => {
	let compare = await bcrypt.compare(pass, hash)
	console.log(compare);
}
genPass()
setTimeout(comparePass, 2000)