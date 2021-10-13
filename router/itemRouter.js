const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemCotroller");

router.post("/add", itemController.add);
router.get("/calculate", itemController.getcalculate);
router.get("/all", itemController.allItem);

module.exports = router;
