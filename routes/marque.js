const marqueRouter = require("express").Router();
const { handleGetMarque } = require("../controllers/marques");
const { handleGetMarqueById } = require("../controllers/marques");
const { handlePostMarque } = require("../controllers/marques");
const { handlePutMarque } = require("../controllers/marques");
const { handleDeleteMarque } = require("../controllers/marques");

marqueRouter.get("/marques", handleGetMarque);
marqueRouter.get("/marques/:id", handleGetMarqueById);
marqueRouter.post("/marques/add-marques", handlePostMarque);
marqueRouter.put("/marques/:id", handlePutMarque);
marqueRouter.delete("/marques/:id",handleDeleteMarque);

module.exports = marqueRouter;
