/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var purchasetype = sequelize.define('purchasetype', {
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
			tableName: 'purchasetype'
		});
	purchasetype.associate = function (models) {
		models.purchasetype.hasMany(models.unit)
	}
	return purchasetype;
};
