const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({items: [
      { s_id: 1, name: "coffee beans"},
      { s_id: 2, name: "more coffee beans"},
      { s_id: 3, name: "some tea"},
      { s_id: 4, name: "chocolate syrup"},
   ]});
});

router.post("/", (req, res) => {
   const items = req.body;
   res.status(201).json({created: items});
});

router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({deleted: id});
});

module.exports = router;