const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleGetMarque(req, res, next) {
  try {
    const marque = await prisma.marques.findMany();
    res.json(marque).status(200);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function handleGetMarqueById(req, res, next) {
  const { id } = req.params;
  try {
    const marqueId = await prisma.marques.findUnique({
      where: { idmarques: Number(id) },
    });
    if (marqueId) res.json(marqueId).status(200);
    else res.status(404).send("Marque not found");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

async function handlePostMarque(req, res, next) {
  try {
    const createmarque = await prisma.marques.create({
      data: { ...req.body },
    });
    res.json(createmarque).status(201);
    console.log("marque saved in BDD");
  } catch (err) {
    if (err === "INVALID_DATA") res.status(422).send("ERROR");
    else res.status(500).send("Error saving the marque");
    next(err);
  }
}

async function handlePutMarque(req, res, next) {
  const { id } = req.params;
  try {
    const marque = await prisma.marques.update({
      where: { idmarques: Number(id) },
      data: { ...req.body },
    });
    res.json(marque);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating Marque ${id}`);
    next(err);
  }
}

async function handleDeleteMarque(req, res, next) {
  const { id } = req.params;
  try {
    const deletemarque = await prisma.marques.delete({
      where: { idmarques: Number(id) },
    });
    if (deletemarque) res.status(200).send("🎉 Marque deleted!");
    else res.status(404).send("Marque not found");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting a Marque");
    next(err);
  }
}

module.exports = {
  handleGetMarque,
  handleGetMarqueById,
  handlePostMarque,
  handlePutMarque,
  handleDeleteMarque,
};
