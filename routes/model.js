const modelRouter = require("express").Router();
const { handleGetModel } = require("../controllers/models");
const { handleGetModelById } = require("../controllers/models");
const { handlePostModel } = require("../controllers/models");
const { handlePutModel } = require("../controllers/models");
const { handleDeleteModel } = require("../controllers/models");

modelRouter.get("/", handleGetModel);
modelRouter.get("/:id", handleGetModelById);
modelRouter.post("/", handlePostModel);
modelRouter.put("/:id", handlePutModel);
modelRouter.delete("/:id", handleDeleteModel);

module.exports = modelRouter;
