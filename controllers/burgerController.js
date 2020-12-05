const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", {burgers: await burger.all()});
});

router.post("/api/burgers", async (req, res) => {
  const okPacket = await burger.create(req.body.burgerName);
  res.json({ id: okPacket.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  const okPacket = await burger.devour(req.params.id);
  res.json({ affectedRows: okPacket.affectedRows });
});

module.exports = router;
