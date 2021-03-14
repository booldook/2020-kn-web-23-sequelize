const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const { Sequelize, sequelize, DataTypes, Model } = require('../modules/connect')
const db = {}

fs.readdirSync(__dirname).filter(file => file !== basename && path.extname(file) === '.js').forEach(file => {
	const model = require(path.join(__dirname, file))(sequelize, Sequelize)
	db[model.name] = model
})

// 관계설정
Object.keys(db).forEach(modelName => { if(db[modelName].associate) db[modelName].associate(db) })

db.sequelize = sequelize
db.Sequelize = Sequelize
sequelize.sync()

module.exports = db

