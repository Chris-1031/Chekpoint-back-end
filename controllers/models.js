const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleGetModel(req, res, next) {
  try {
    const model = await prisma.models.findMany({
      include: {
        marques: true
      }
    });
    res.json(model).status(200);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function handleGetModelById(req, res, next) {
  const { id } = req.params;
  try {
    const modelId = await prisma.models.findUnique({
      where: { idModels: Number(id) },
     include: {
       marques: true
     }
    });
    if (modelId) res.json(modelId).status(200);
    else res.status(404).send("Model not found");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function handlePostModel(req, res, next) {
  try {
    const createmodel = await prisma.models.create({
      data: { ...req.body },
    });
    res.json(createmodel).status(201);
    console.log("model saved in BDD");
  } catch (err) {
    console.error(err);
   
     if (err === "INVALID_DATA") res.status(422).send("ERROR");
    else res.status(500).send("Error saving the model");
    next(err);
  }
}

async function handlePutModel(req, res, next) {
  const { id } = req.params;
  try {
    const model = await prisma.models.update({
      where: { idModels: Number(id) },
      data: { ...req.body },
    });
    res.json(model);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating Model ${id}`);
    next(err);
  }
}

async function handleDeleteModel(req, res, next) {
  const { id } = req.params;
  try {
    const deletemodel = await prisma.models.findUnique({
      where: { idModels: Number(id) },
    });
    if (deletemodel) res.status(200).send("🎉 Model deleted!");
    else res.status(404).send("Model not found");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting a Model");
    next(err);
  }
}

module.exports = {
  handleGetModel,
  handleGetModelById,
  handlePostModel,
  handlePutModel,
  handleDeleteModel,
};
