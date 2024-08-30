const Item = require("../models/item");

const path = require("path");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    console.log("Items fetched:", items);
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send(error);
  }
};

exports.write = async (req, res) => {
  try {
  } catch (erroe) {
    console.error("Error serving write.html:", error);
    res.status(500).send("Error loading the write page");
  }
};
