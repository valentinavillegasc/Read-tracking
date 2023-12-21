const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Tracker", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    startPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
