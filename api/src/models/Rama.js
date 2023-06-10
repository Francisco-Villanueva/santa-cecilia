const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Ramas", {
    idRama: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    ramaName: {
      type: DataTypes.STRING,
      unique: true,
    },
    ramaImg: {
      type: DataTypes.STRING,
    },
  });
};
