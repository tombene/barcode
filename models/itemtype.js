/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var itemtype = sequelize.define('itemtype', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
			tableName: 'itemtype'
		});
	itemtype.associate = function (models) {
		models.itemtype.hasMany(models.item)
	}
	return itemtype;
};
