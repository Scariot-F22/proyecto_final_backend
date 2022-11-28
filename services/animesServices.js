const { Animes, User } = require("../models");

const createAnimes = async(title, description, image, category, userId)=> {
    let newAnime
    try {
        const findUser = await User.findById(userId);
        if (!findUser) {
            return
        }
        newAnime = new Animes({ title, description, image, category, userId });
        await newAnime.save();
        findUser.animes.push(newAnime._id);
        await findUser.save();
    } catch (error) {
        throw error
    }
    return ("Animé grabado con éxito", newAnime);
}

const updateAnime = async(id, body)=> {
    let result;
    try {
        const update = {
        title: body.title,
        description: body.description,
        image: body.image,
        category: body.category
        }

        result = await Animes.findByIdAndUpdate(id, update);
        result.save();
    } catch (error) {
        throw error
    }
    return result;
}

const deleteAnime = async(id)=> {
    try {
        await Animes.findByIdAndRemove(id)
    } catch (error) {
        throw error
    }
  
}
module.exports = {
    createAnimes,
    updateAnime,
    deleteAnime
}