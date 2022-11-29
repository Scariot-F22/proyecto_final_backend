const { Chapters, Animes } = require("../models");
const { chaptersServices } = require('../services')

const createChapter = async(req, res) => {
    try { 
        const { title,description,video,animeId } = req.body
        
        const resultValidation = validationResult(req);
        const haveError = !resultValidation.isEmpty(); 
        if (haveError) {
            return res.status(400).send(resultValidation)
        }
        const result = await chaptersServices.createChapter(title,description,video, animeId);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send({ message: "Error inesperado al insertar capítulo", error })
    }
}

const getChapters = async(req, res) => {
    try {
        const { animeId } = req.body;
        const chapters = await Chapters.find({ animeId: animeId }) 
        console.log(chapters)
        if(chapters) { 
            res.status(200).send(chapters)  
        }
        return res.status(400).send({ message: "id de anime inválido" })
    } catch (error) {
        return error
    } 
}

const updateChapter = async(req, res) => {
    try {
        const { id } = req.params;
    
        const resultValidation = validationResult(req);
        const haveError = !resultValidation.isEmpty(); 
        if (haveError) {
            return res.status(400).send(resultValidation)
        }
        const result = await chaptersServices.updateChapter(id, req.body);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send({ message: 'Error al editar anime', error })
    }
}

const deleteChapter = async(req, res)=> {
    try {
        let {id} = req.params;

        const result = await chaptersServices.deleteChapter(id);
        res.status(201).send({ message: "Capítulo eliminado con éxito", result } )
    } catch (error) {
        return res.status(500).send({ message: "Error al eliminar capítulo", error })
    }
}

module.exports = {
    createChapter,
    getChapters,
    updateChapter,
    deleteChapter
}