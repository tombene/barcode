/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var itemcondition = sequelize.define('itemcondition', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
			tableName: 'itemcondition'
		});
	itemcondition.associate = function (models) {
		models.itemcondition.hasMany(models.itemconditioninfo);
	}
	return itemcondition;
};
