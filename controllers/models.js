const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleGetModel(req, res, next) {
  try {
    const model = await prisma.model.findMany();
    res.json(model).status(200);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function handleGetModelById(req, res, next) {
  const { id } = req.params;
  try {
    const modelId = await prisma.model.findUnique({
      where: { id: Number(id) },
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
    const createmodel = await prisma.model.create({
      data: { ...req.body },
    });
    res.json(createmodel).status(201);
    console.log("model saved in BDD");
  } catch (err) {
    console.error(err);
    if (err === "DUPLICATE_EMAIL")
      res.status(409).json({ message: "This email is already used" });
    else if (err === "INVALID_DATA") res.status(422).send("ERROR");
    else res.status(500).send("Error saving the model");
    next(err);
  }
}

async function handlePutModel(req, res, next) {
  const { id } = req.params;
  try {
    const model = await prisma.model.update({
      where: { id: Number(id) },
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
    const deletemodel = await prisma.model.findUnique({
      where: { id: Number(id) },
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
