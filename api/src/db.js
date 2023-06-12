require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PW, DB_DATABASE, DB_HOST } = process.env;

const fs = require("fs");
const path = require("path");

//  Passing a connection URI
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PW}@${DB_HOST}/${DB_DATABASE}`
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
const { Canciones, Ramas, SantaCecilias, Author } = sequelize.models;

Ramas.hasMany(Canciones, { foreignKey: "idRama", as: "canciones" });
Canciones.belongsTo(Ramas, { foreignKey: "idRama", as: "rama" });
Author.hasMany(Canciones, { foreignKey: "idAuthor", as: "canciones" });
Canciones.belongsTo(Author, { foreignKey: "idAuthor", as: "author" });
SantaCecilias.hasMany(Canciones, { foreignKey: "idSanta", as: "canciones" });
Canciones.belongsTo(SantaCecilias, { foreignKey: "idSanta", as: "santa" });

module.exports = {
  ...sequelize.models,
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
