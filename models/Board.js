const Board = (sequelize, Sequelize) => {
	return sequelize.define('Board', {
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
}

module.exports = Board