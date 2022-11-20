const getAnimes = (req, res)=> {
    res.status(200).send("Lista de animes")
}

const getAnimeById = (req, res)=> {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Anime seleccionado")
    }else res.status(500).send("Error")
}

const createAnimes = (req, res)=> {
    res.status(200).send("Inserte anime")
}

const updateAnime = (req, res)=> {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Editar anime")
    }else res.status(500).send("Error")
}

const deleteAnime = (req, res)=> {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Eliminar anime")
    }else res.status(500).send("Error")
}

module.exports = {
    getAnimes,
    getAnimeById,
    createAnimes,
    updateAnime,
    deleteAnime
}