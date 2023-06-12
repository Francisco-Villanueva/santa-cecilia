const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Author", {
    idAuthor: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    authorName: {
      type: DataTypes.STRING,
      unique: true,
    },
    authorImg: {
      type: DataTypes.STRING,
    },
  });
};
