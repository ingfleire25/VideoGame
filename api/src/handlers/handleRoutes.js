const {createVideo} = require('../controllers/videoGameControllers')


getAllVideoGame = (req, res) =>{
    // res.send("NIY: obtiene todos los video juegos");
    const { name } = req.query;
    if(name !==  undefined){
        res.send(`quiero buscar todos los que se llamen ${name}`)
    }else {
        res.send("quiero mandar todos los usuarios")
    }
    
}

getVideoById = (req, res) =>{
const { id } = req.params
res.send(`NIY: va a enviar el detalle de id ${id}`);
}


getvideoByName = (req, res) => {

}

getByGenres = () => {}

postVideoGames =  async (req, res) => {
try {
    const {name,descrption,plataforms,background_image,released,rating} = req.body;

    const newVideoGame = await createVideo(name,descrption,plataforms,background_image,released,rating)
res.status(201).json(newVideoGame)
} catch (error) {
    res.status(400).json({error: error.message})
}

}


module.exports = {
    getAllVideoGame,
    getVideoById,
    getvideoByName,
    getByGenres,
    postVideoGames
}