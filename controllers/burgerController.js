const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(await burger.all());
});

router.post("/api/burgers", async (req, res) => {
  console.log(await burger.create(req.body.burgerName));
});

router.put("/api/burgers/:id", async (req, res) => {
  console.log(await burger.updateDevoured(true, req.params.id));
});

module.exports = router;
