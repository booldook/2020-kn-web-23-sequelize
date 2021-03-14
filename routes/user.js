const express = require('express')
const router = express.Router()
const { User } = require('../models')


router.get('/create', async (req, res, next) => {
	try {
		const result = await User.create({
			userid: 'booldook',
			userpw: '0000',
			username: '임덕규'
		})
		res.json(result);
	}
	catch(e) {
		next(e)
	}
})

router.get(['/list', '/list/:page'], async (req, res, next) => {
	try {
		const limit = 3
		const page = req.params.page || 1
		const offset = (page - 1) * limit;
		const result = await User.findAll({
			order: [['id', 'desc']],
			limit,
			offset,
		})
		res.json(result)
	}
	catch(e) {
		next(e)
	}
})

module.exports = router