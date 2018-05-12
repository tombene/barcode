/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var itemconditioninfo = sequelize.define('itemconditioninfo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
			tableName: 'itemconditioninfo'
		});
	itemconditioninfo.associate = function (models) {
		models.itemconditioninfo.hasMany([models.item])
	}
	return itemconditioninfo;
};
