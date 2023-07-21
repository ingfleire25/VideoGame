const { Videogame } = require('../db');




const createVideo = async (name,descrption,plataforms,background_image,released,rating) =>{
    return await Videogame.create({name,descrption,plataforms,background_image,released,rating})

}


module.exports = {
    createVideo,

}