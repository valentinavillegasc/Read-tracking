const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pagesLeft: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pages: {
        type: DataTypes.INTEGER,
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
      stars: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );
};
