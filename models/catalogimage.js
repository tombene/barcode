/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var catalogimage = sequelize.define('catalogimage', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CatalogInfo: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		imagePath: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		main: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
			tableName: 'catalogimage'
		});
		
	catalogimage.associate = function (models) {
		models.catalogimage.belongsTo(models.cataloginfo);
	};

	return catalogimage;
};
