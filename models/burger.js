const orm = require("../config/orm");

const burger = {
  all: () => {
    return orm.selectAll("burgers");
  },

  create: (burgerName) => {
    return orm.insertOne("burgers", "burger_name", burgerName);
  },

  updateDevoured: (value, id) => {
    return orm.updateOne("burgers", "devoured", value, `id = ${id}`);
  },
};

module.exports = burger;