/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var cataloginfocategoryattribute = sequelize.define('cataloginfocategoryattribute', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		// catalogInfoCategoryId: {
		// 	type: DataTypes.BIGINT,
		// 	allowNull: true
		// },
		// catalogInfoAttributeId: {
		// 	type: DataTypes.BIGINT,
		// 	allowNull: true
		// }
	}, {
			tableName: 'cataloginfocategoryattribute'
		});
	cataloginfocategoryattribute.associate = function (models) {
		models.cataloginfocategoryattribute.belongsTo(models.cataloginfoattribute);
		models.cataloginfocategoryattribute.belongsTo(models.cataloginfocategory);
	}
	return cataloginfocategoryattribute;
};
