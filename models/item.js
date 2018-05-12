/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	var item = sequelize.define('item', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rowversion: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		unitId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		catalogInfoId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		itemCondition: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		itemConditionInfoId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		packagingCondition: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		itemType: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		quantityReceived: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		appraisalPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		retailPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		dateCreated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		attributes: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		controlNumber: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		claimPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		isFood: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		isEBTEligible: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		controlScanOnly: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		createdBy: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
	}, {
			tableName: 'item'
		});
	item.associate = function (models) {
		models.item.hasMany([models.itemimage]);
		models.item.belongsTo([models.cataloginfo, models.itemconditioninfo, models.unit, models.packagingcondition, models.itemtype, models.securityuser])
	}
	return item;
};
