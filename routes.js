const express = require("express");

const routes = express.Router();

//=========================================================================================

routes.get("/", (req,res) => {

    res.send('OK')
})

const Config = require("./controllers/Config");

routes.get("/geral", Config.geral);


//=========================================================================================


module.exports = routes;