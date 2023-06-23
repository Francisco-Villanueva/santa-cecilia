const { Canciones, Ramas, SantaCecilias, Author } = require("../db");
const {configLyric} = require("../helper.js");

const getAllSantas = async (req, res) => {
  try {
    const santas = await SantaCecilias.findAll({
      include: {
        model: Canciones,
        as: "canciones",
      },
    });
    res.status(200).json(santas);
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createSanta = async (req, res) => {
  try {
    const { place, year, idRama } = req.body;

    const newSanta = await SantaCecilias.create({
      place: place,
      year: year,
      idRama: idRama,
    });

    res.status(200).json(newSanta);
  } catch (error) {
    res.status(400).json({ error });
  }
};
const getAllCanciones = async (req, res) => {
  try {
    const canciones = await Canciones.findAll();
    // res.json(canciones)

    res.status(200).json(canciones);
  } catch (error) {
    console.log(error);
  }
};

const createCancion = async (req, res) => {
  try {
    const {  title, year, sound, idRama, idSanta, idAuthor } = req.body;

    const lyrics = `Intro: C G C B7
    F                          B7
    Quede medio flasheado al bajar
                                          Em 
    apenas puse un pie en la tierra
    C   G
    el aire tiene olor familiar
    D
    como a pastillas de menta
    
    tengo qué contarle a mamá 
    el cielo tiene tantas estrellas 
    un viejo lobo me consoló 
    cuando me acordé de ella
    
                 C
    a la mañana me siento en la carpa
                            G
    me froto los ojos no tengo reloj
                        C
    medio dormido me calzo las botas 
    B7  Em
    un nuevo dia para estrenar
          A7  C        D7
    pero nunca me voy a olvidar
    G D
    primera noche en la sierra
    
    
    Creo que dijimos ya fue
     
    dormimos sobre el cubretecho 
    Mañana de depresión de volver 
    Hoy es guitarra y encuentro
    
    El poncho no alcanza para tres
    la ronda se iba haciendo pequeña 
    y unos ojos mirándome
    cuando gire la cabeza
    
    A la mañana me siento en la carpa 
    Me froto los ojos, no tengo reloj 
    Medio dormido me calzo las botas 
    Un nuevo dia para estrenar
    Pero nunca me voy a olvidar 
    Aquella noche en la sierra
    
    Las décadas gastaron mi andar 
    Deje ya las pastillas de menta 
    El fuego tiene otra razón 
    Picado grueso y botellas
    
    No perderé la oportunidad 
    Dormir en una carpa de vuelta 
    Al cielo que de chico me vio 
    Ahora le sobra una estrella
    
    A la mañana me siento en la carpa 
    Me froto los ojos, no tengo reloj 
    Medio dormido me calzo las botas 
    Un nuevo dia para estrenar
    Dios sabe si esta será
    D7    G F
    Mi última noche en la sierra
                                         C   D7
    Mi última noche en la sierra
                                                 G  F C D7 G
    Mi última noche en la sieeerra 
    Sin Totem - 2020`
    const configuredLyric = configLyric(lyrics)
    const newCancion = await Canciones.create({
      lyrics: configuredLyric,
      title: title,
      year: year,
      sound: sound,
      idRama: idRama,
      idSanta: idSanta,
      idAuthor: idAuthor,
    });

    res.status(200).json(newCancion);
  } catch (error) {
    console.log({ error });
  }
};

const getRamas = async (req, res) => {
  try {
    const ramas = await Ramas.findAll({
      include: {
        model: Canciones,
        as: "canciones",
      },
    });
    res.status(200).json(ramas);
  } catch (error) {
    console.log(error);
  }
};
const createRama = async (req, res) => {
  try {
    const { ramaName, ramaImg } = req.body;
    const newRama = await Ramas.create({
      ramaName: ramaName,
      ramaImg: ramaImg,
    });
    

    res.status(200).json(newRama);
  } catch (error) {
    console.log(error);
  }
};
const getAuthor = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: {
        model: Canciones,
        as: "canciones",
      },
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createAuthor = async (req, res) => {
  try {
    const { authorName, authorImg } = req.body;

    const newAuthor = await Author.create({
      authorName: authorName,
      authorImg: authorImg,
    });

    res.status(200).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
module.exports = {
  getAllCanciones,
  createCancion,
  getRamas,
  createSanta,
  getAllSantas,
  createRama,
  getAuthor,
  createAuthor,
};
