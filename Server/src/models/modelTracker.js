const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Tracker", {
    id: {
      type: DataTypes.UUID,
      primarKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    startPage: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    endPage: {
      type: DataTypes.NUMBER,
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
