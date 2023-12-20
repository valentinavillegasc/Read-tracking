const { DataTypes } = require("sequelize");

modelUser.exports = (sequelize) => {
  sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.UUID,
        primarKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pages: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      format: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      sinopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      quotes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
    },
    { timestamps: false }
  );
};
