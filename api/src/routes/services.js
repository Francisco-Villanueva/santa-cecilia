const {Canciones, Ramas, SantaCecilias} = require('../db')
const axios = require('axios')

const getAllSantas = async (req, res) => {
    try {
        const santas = await SantaCecilias.findAll({
            include: {
              model: Canciones,
              as: "canciones",
            },
          })
        res.status(200).json(santas)
    } catch (error) {
        res.status(400).json({error})
    }
}
const createSanta = async (req, res) => {
    try {
        const {place, year, idRama} = req.body

        const newSanta = await SantaCecilias.create({
            place: place,
            year: year,
            idRama: idRama
        })

        res.status(200).json(newSanta)

    } catch (error) {
        res.status(400).json({error})
    }
}
const getAllCanciones = async (req, res) => {
    try {
        const canciones = await Canciones.findAll()
        // res.json(canciones)

        res.status(200).json(canciones)
    } catch (error) {
        console.log(error)
    }
}

const createCancion = async (req, res) => {
    try {
        const { lyrics, title, year, sound ,idRama , idSanta } = req.body

        const newCancion = await Canciones.create({
            lyrics: lyrics,
            title: title,
            year: year,
            sound: sound,
            idRama: idRama,
            idSanta: idSanta
        })

        res.status(200).json(newCancion)
    } catch (error) {
        console.log({error})
    }
}

const getRamas = async (req, res) => {
    try {
        const ramas = await  Ramas.findAll({
            include: {
              model: Canciones,
              as: "canciones",
            },
          });

        res.status(200).json(ramas)
    } catch (error) {
        console.log(error)
    }
}
const createRama = async (req, res) => {
    try {
        const {ramaName, ramaImg} = req.body
        const newRama = await Ramas.create({
            ramaName: ramaName,
            ramaImg: ramaImg
        })

        res.status(200).json(newRama)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllCanciones,
    createCancion,
    getRamas,
    createSanta ,
    getAllSantas ,
    createRama
}