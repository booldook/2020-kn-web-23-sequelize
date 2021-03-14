const User = (sequelize, Sequelize) => {
	return sequelize.define('User', {
		userid: {
			type: Sequelize.STRING(16),
			allowNull: false,
		},
		userpw: {
			type: Sequelize.STRING(255),
		},
		username: {
			type: Sequelize.STRING(255),
		},
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'seq-user'
	})
}

module.exports = User