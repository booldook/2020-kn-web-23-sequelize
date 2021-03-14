const { Sequelize, Model, DataTypes } = require('sequelize')

const connect = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_DIALECT,
	username: process.env.DB_USER,
	password: process.env.DB_PATH,
	pool: { max: 10 }
}

const sequelize = new Sequelize(connect);

module.exports = { Sequelize, Model, DataTypes, sequelize }