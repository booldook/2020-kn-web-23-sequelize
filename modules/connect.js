const { Sequelize, Model, DataTypes } = require('sequelize')

const connect = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_DIALECT,
	database: process.env.DB_DATABASE,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	pool: { max: 10 }
}

const sequelize = new Sequelize(connect);

module.exports = { Sequelize, Model, DataTypes, sequelize }