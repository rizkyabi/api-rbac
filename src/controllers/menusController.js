const MenuModels = require("../models/menusModel");

async function index(req, res) {
  const dataMenus = await MenuModels.getDataMenus();
  res.json(dataMenus);
}

async function create(req, res) {
  const dataCreate = req.body;
  const resultInsert = await MenuModels.createMenu(dataCreate);

  if (resultInsert) {
    res.json({
      message: "Menus created successfully",
    });
  } else {
    res.json({
      message: "Menus created failed",
    });
  }
}

async function update(req, res) {
  const dataUpdate = req.params;
  const resultUpdate = await MenuModels.updateMenu(dataUpdate);

  if (resultUpdate) {
    res.json({
      message: "Menus update successfully",
    });
  } else {
    res.json({
      message: "Menus update Failed",
    });
  }
}

async function menuDelete(req, res) {
  const dataDelete = req;
  const resultDelete = await MenuModels.deleteMenu(dataDelete);

  if (resultDelete) {
    res.json({
      message: "Menus delete successfully",
    });
  } else {
    res.json({
      message: "Menus delete failed",
    });
  }
}

module.exports = { index, create, update, menuDelete };
