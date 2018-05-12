/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var itemimage = sequelize.define('itemimage', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		itemId: {
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
			tableName: 'itemimage'
		});
	itemimage.associate = function (models) {
		models.itemimage.belongsTo(models.item)
	}
	return itemimage;
};
