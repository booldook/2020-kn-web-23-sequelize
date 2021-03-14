require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { Sequelize, Model, DataTypes, sequelize } = require('./modules/connect')

app.listen(process.env.PORT, () => {
	console.log('http://127.0.0.1:'+process.env.PORT);
});

sequelize.define('seq-board', {
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

