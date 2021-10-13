const express = require("express");
const Item = require("../model/item");

exports.add = async (req, res) => {
  const { code, amount, fob, kgrs, des } = req.body;
  if ((!code || !amount, !fob, !kgrs)) {
    return res.status(422).json({ err: "plz filled properly" });
  }

  try {
    const item = new Item({
      code,
      amount,
      fob,
      kgrs,
      des,
    });
    const data = await item.save();
    if (data) {
      res.status(201).json({ message: "addd data successfuly" });
    } else {
      res.status(500).json({ error: "Faild to add data" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.allItem = async (req, res) => {
  try {
    const data = await Item.find();
    if (!data) {
      res.status(200).json({ message: "not Found data", data });
    }
    // console.log(data);
    res.status(200).json({ message: "all item", data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getcalculate = async (req, res) => {
  try {
    const code = req.body.code;

    const data = await Item.findone({ code: code });
    console.log(data);
    if (!data) {
      res.status(200).json({ message: "not Found data", data });
    }
    const calculated = (await (data.amount * data.kgrs)) / 100;
    res.status(200).json({ message: "calculated data", calculated });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
