const express = require("express");
const router = express.Router();
const menus = require("../controllers/menusController");

router.get("/menus", menus.index);
router.post("/menus", menus.create);
router.put("/menus", menus.update);
router.delete("/menus", menus.menuDelete);

module.exports = router;
