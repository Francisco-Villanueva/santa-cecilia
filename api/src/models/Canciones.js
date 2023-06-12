const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Canciones", {
    idCancion: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    lyrics: {
      type: DataTypes.STRING,
    },
    sound: {
      type: DataTypes.STRING,
    },
    idRama: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    idSanta: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    idAuthor: {
      type: DataTypes.UUID,
    },
  });
};
