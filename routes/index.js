const marquesRouter = require("./marque");
const modelRouter = require("./model");


const setupRoutes = (app) => {
	app.use("/api/marques", marquesRouter);
	app.use("/api/models", modelRouter);
	
};

module.exports = setupRoutes;
