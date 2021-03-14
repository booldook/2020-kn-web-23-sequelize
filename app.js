require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { Sequelize, Model, DataTypes, sequelize } = require('./modules/connect')

app.listen(process.env.PORT, () => {
	console.log('http://127.0.0.1:'+process.env.PORT);
});

const SeqBoard = sequelize.define('SeqBoard', {
	title: {
		type: Sequelize.STRING(255),
		allowNull: false,
	},
	writer: {
		type: Sequelize.STRING(50),
	},
	content: {
		type: Sequelize.TEXT(),
	},
}, {
	timestamps: true,
	charset: 'utf8',
	tableName: 'seq-board'
})

sequelize.sync()

app.get('/create', async (req, res, next) => {
	try {
		const result = await SeqBoard.create({
			title: '아버지를 아버지라...',
			writer: '홍길동',
			content: '아버지를 아버지라...형을 형이라...'
		})
		res.json(result);
	}
	catch(e) {
		next(e)
	}
})

app.get(['/list', '/list/:page'], async (req, res, next) => {
	try {
		const limit = 3
		const page = req.params.page || 1
		const offset = (page - 1) * limit;
		const result = await SeqBoard.findAll({
			order: [['id', 'asc'], ['title', 'asc']],
			limit,
			offset,
			// where: { 'id': 3 },
		})
		res.json(result)
	}
	catch(e) {
		next(e)
	}
})


app.use((err, req, res, next) => {
	console.log(err);
})

