const db = require("./db");

async function getDataMenus() {
  const result = await db.select("*").from("menu");
  return result;
}

async function createMenu(payload) {
  const dataInsert = {
    title: payload.title,
    parent: payload.parent,
    active: payload.active,
    page: payload.page,
    alias: payload.alias,
    sorting: payload.sorting,
  };
  const result = await db("menu").insert(dataInsert);
  return result;
}

async function updateMenu() {
  const dataUpdate = {
    title: "Home",
  };
  const result = await db("menu").where({ id: 2 }).update(dataUpdate);
  return result;
}

async function deleteMenu() {
  const result = await db("menu")
    .where({ title: "Documents", sorting: 5 })
    .del();
  return result;
}

module.exports = { getDataMenus, createMenu, updateMenu, deleteMenu };
