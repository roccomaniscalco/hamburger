const orm = require("../config/orm");

const burger = {
  all: async () => {
    return await orm.selectAll("burgers");
  },

  create: async (burgerName) => {
    return await orm.insertOne("burgers", "burger_name", burgerName);
  },

  updateDevoured: async (value, id) => {
    return await orm.updateOne("burgers", "devoured", value, `id = ${id}`);
  },
};

module.exports = burger;