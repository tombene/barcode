/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var cataloginfoattributevalue = sequelize.define('cataloginfoattributevalue', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		catalogInfoId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		catalogInfoAttributeId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
			tableName: 'cataloginfoattributevalue'
		});
	cataloginfoattributevalue.associate = function (models) {
		models.cataloginfoattributevalue.belongsTo([models.cataloginfoattribute, models.cataloginfo]);
	};
	return cataloginfoattributevalue;
};
