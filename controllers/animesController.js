const { Animes } = require("../models");
const { animesServices } = require("../services");

const createAnimes = async(req, res)=> {
    try {
        const { title,description,image,category, userId } = req.body
    
        const result = await animesServices.createAnimes(title,description,image,category, userId);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send("Error inseperado al insertar anime en la base de datos")
    }
}

const getAnimes = async(req, res)=> {
    try {
        const animes = await Animes.find({});
        res.status(200).send({ animes })
    } catch (error) {
        return res.status(500).send(error)
    }
}

//FIX ME
const getAnimeById = async(req, res)=> {
    try {
        const anime = await Animes.findById(req.params.id); 
        console.log(anime)
        const { _id, title, description, image } = anime;
        if(anime) {
            res.status(200).send({ _id, title, description, image })
        }
        //ME SALE POR EL CATCH
        res.status(400).send({ message: "id de usuario inválido" })
    } catch (error) {
        return res.status(500).send({ message: 'Error inesperado',error })
    }
}

const updateAnime = async(req, res)=> {
    try {
        const { id } = req.params;
    
        const result = await animesServices.updateAnime(id, req.body);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send({ message: 'Error al editar anime', error })
    }
}

const deleteAnime = async(req, res)=> {
    try {
        let {id} = req.params;

        const result = await animesServices.deleteAnime(id);
        res.status(201).send({ message: "Anime eliminado con éxito", result } )
    } catch (error) {
        return res.status(500).send({ message: "Error al eliminar anime", error })
    }
}

module.exports = {
    getAnimes,
    getAnimeById,
    createAnimes,
    updateAnime,
    deleteAnime
}