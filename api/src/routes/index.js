const { Router } = require('express');
const { getAllVideoGame, getVideoById, getvideoByName, getByGenres, postVideoGames } = require('../handlers/handleRoutes');


// Importar todos los handles;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getAllVideoGame)
router.get("/videogames/:idVideoGame", getVideoById)
router.post("/videogames", postVideoGames)

module.exports = router;
