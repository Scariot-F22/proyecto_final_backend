const { Animes, Chapters } = require("../models");

const createChapter = async(title,description,video, animeId)=> { 
    let newChapter; 
    try {
        const findAnime = await Animes.findById(animeId);
        if (!findAnime) {
            return
        }
        newChapter = new Chapters({ title, description, video, animeId });
        await newChapter.save();
        findAnime.chapters.push(newChapter._id); 
        await findAnime.save();
    } catch (error) {
        throw error
    }
    return ({ message:"Capítulo grabado con éxito", newChapter });
}

const updateChapter = async(id, body)=> {
    let result;
    try {
        const update = {
        title: body.title,
        description: body.description,
        video: body.video
        }

        result = await Chapters.findByIdAndUpdate(id, update);
        result.save();
    } catch (error) {
        throw error
    } 
    return result;
}

const deleteChapter = async(id)=> {
    try {
        await Chapters.findByIdAndRemove(id)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createChapter,
    updateChapter,
    deleteChapter
}