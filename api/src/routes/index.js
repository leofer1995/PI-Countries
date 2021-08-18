const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.js');
const activityRouter = require('./activity.js');


const router = Router();
//console.log(router)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter)
router.use('/activity', activityRouter);
//console.log(router)

module.exports = router;
