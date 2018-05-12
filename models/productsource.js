/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var productsource = sequelize.define('productsource', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
			tableName: 'productsource'
		});
	productsource.associate = function (models) {
		models.productsource.hasMany(models.load)
	}
	return productsource;
};
