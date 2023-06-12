const expres = require("express");
const router = expres.Router();

const {
  getAllCanciones,
  createCancion,
  getRamas,
  createRama,
  createSanta,
  getAllSantas,
  createAuthor,
  getAuthor,
} = require("./services");

router.get("/ramas", getRamas);
router.post("/ramas", createRama);
router.post("/santas", createSanta);
router.get("/santas", getAllSantas);
router.get("/canciones", getAllCanciones);
router.post("/canciones", createCancion);
router.get("/author", getAuthor);
router.post("/author", createAuthor);

module.exports = router;
