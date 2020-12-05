const orm = require("../config/orm");

const burger = {
  all: () => {
    return orm.selectAll("burgers");
  },

  create: (burgerName) => {
    return orm.insertOne("burgers", "burger_name", burgerName);
  },

  devour: (id) => {
    return orm.updateOne("burgers", "devoured", true, id);
  },
};

module.exports = burger;