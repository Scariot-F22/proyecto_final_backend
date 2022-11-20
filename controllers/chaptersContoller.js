const createChapter = (req, res) => {
    res.status(200).send("Capitulo insertado")
}

const getChaptersById = (req, res) => {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Lista de capitulos")
    } else {
        res.status(500).send("Error al cargar los capitulos")
    }
}

const updateChapter = (req, res) => {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Capitulo editado")
    } else {
        res.status(500).send("Error al cargar los capitulos")
    }
}

const deleteChapter = (req, res) => {
    let {id} = req.params
    if (id > 0) {
        res.status(200).send("Capitulo eliminado")
    } else {
        res.status(500).send("Error al cargar los capitulos")
    }
}

module.exports = {
    createChapter,
    getChaptersById,
    updateChapter,
    deleteChapter
}