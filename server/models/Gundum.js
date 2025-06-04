const getId = require("../utils/getId");

const gundumx = [
  {
    name: "Gundum Barbatos",
    id: getId(),
  },
  {
    name: "Strike Freedom",
    id: getId(),
  },
  {
    name: "Gundum Banshee",
    id: getId(),
  },
];

class Gundum {
  static create(name) {
    const newGundum = {
      name,
      id: getId(),
    };
    gundumx.push(newGundum);
    return newGundum;
  }

  static list() {
    return [...gundumx];
  }

  static find(id) {
    return gundumx.find((gundum) => gundum.id === id);
  }

  static changeGundumName(id, newName) {
    const gundum = Gundum.find(id);
    if (!gundum) return null;
    gundum.name = newName;
    return gundum;
  }

  static deleteGundum(id) {
    const gundumIndex = gundumx.findIndex((gundum) => gundum.id === id);
    if (gundumIndex < 0) return false;
    gundumx.splice(gundumIndex, 1);
    return true;
  }
}

module.exports = Gundum;
