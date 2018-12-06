const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({suppliers: [
      { id: 1, name: "coffee roaster"},
      { id: 2, name: "food vender"},
      { id: 3, name: "tea distributor"},
   ]});
});

router.post("/", (req, res) => {
   const supplier = req.body;
   res.status(201).json({created: supplier});
});

router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({deleted: id});
});

module.exports = router;