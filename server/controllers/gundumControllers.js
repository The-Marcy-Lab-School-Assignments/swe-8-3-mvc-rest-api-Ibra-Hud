const Gundum = require("../models/Gundum.js");

const serveGundumMulti = (req, res) => {
  const gundumList = Gundum.list();
  res.send(gundumList);
};

const serveGundum = (req, res) => {
  const { id } = req.params;
  const gundum = Gundum.find(Number(id));

  if (!gundum) {
    return res.status(404).send("Gundum not found");
  }

  res.send(gundum);
};

const createGundum = (req, res) => {
  const { name } = req.body;
  console.log("Name: (in controller)", name);

  if (!name) {
    return res.status(400).send("Name are required");
  }

  const newGundum = Gundum.create(name);
  console.log("New Gundum: ", newGundum);
  res.send(newGundum);
};

const updateGundum = (req, res) => {
  const { name } = req.body;
  console.log("Name: (in controller)", name);
  if (!name) {
    return res.send(400).send({ message: "Invalid Entry" });
  }

  const { id } = req.params;
  const updateGundum = Gundum.changeGundumName(Number(id), name);
  console.log("Update Gundum: (in controller)", updateGundum);
  if (!updateGundum) {
    return res.status(404).send({
      message: `No gundum with the id ${Number(id)}`,
    });
  }

  res.send(updateGundum);
};

const del = (req, res) => {
  const { id } = req.params;
  const deleted = Gundum.deleteGundum(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`,
    });
  }

  res.sendStatus(204);
};

module.exports = {
  serveGundumMulti,
  serveGundum,
  createGundum,
  updateGundum,
  del,
};
