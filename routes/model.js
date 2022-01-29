const modelRouter = require("express").Router();
const { handleGetModel } = require("../controllers/models");
const { handleGetModelById } = require("../controllers/models");
const { handlePostModel } = require("../controllers/models");
const { handlePutModel } = require("../controllers/models");
const { handleDeleteModel } = require("../controllers/models");

modelRouter.get("/models", handleGetModel);
modelRouter.get("/models/:id", handleGetModelById);
modelRouter.post("/models/add-models", handlePostModel);
modelRouter.put("/models/:id", handlePutModel);
modelRouter.delete(
  "/models/:id",
  (req, res, next) => {
    console.log(req.user);
    if (req.user.roleId === 1) {
      next();
    } else {
      res.sendStatus(403);
    }
  },
  handleDeleteModel
);

module.exports = modelRouter;
