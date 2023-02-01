const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const exerciceControllers = require("./controllers/exerciceControllers");

router.get("/exercices", exerciceControllers.browse);
router.get("/exercices/:id", exerciceControllers.read);
router.put("/exercices/:id", exerciceControllers.edit);
router.post("/exercices", exerciceControllers.add);
router.delete("/exercices/:id", exerciceControllers.destroy);

module.exports = router;
