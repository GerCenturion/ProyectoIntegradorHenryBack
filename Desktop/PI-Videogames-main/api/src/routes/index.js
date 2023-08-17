const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VideogameRoutes = require("./Videogame");
const GenresRoutes = require("./Genre");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", VideogameRoutes);
router.use("/genres", GenresRoutes);

module.exports = router;
