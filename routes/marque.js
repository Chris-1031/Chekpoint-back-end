const marqueRouter = require("express").Router();
const { handleGetMarque } = require("../controllers/marques");
const { handleGetMarqueById } = require("../controllers/marques");
const { handlePostMarque } = require("../controllers/marques");
const { handlePutMarque } = require("../controllers/marques");
const { handleDeleteMarque } = require("../controllers/marques");

marqueRouter.get("/", handleGetMarque);
marqueRouter.get("/:id", handleGetMarqueById);
marqueRouter.post("/", handlePostMarque);
marqueRouter.put("/:id", handlePutMarque);
marqueRouter.delete("/:id",handleDeleteMarque);

module.exports = marqueRouter;
