const express = require("express");
const productRoute = express.Router();
const productCrud = require("../../db/helpers/productCrud");
const passport = require("passport");

//@route GET /product/menu
//@desc displays product list
//@access Private
productRoute.get(
  "/menu",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const json = req.body;
    productCrud.getAll(json, res);
  }
);

//@route GET /product/details:id
//@desc displays product by id
//@access Private
productRoute.get(
  "/details/:id",
  // passport.authenticate("jwt", { session: false}),
  (req, res) => {
    const json = req.body;
    productCrud.getById(json, res, req.params.id);
  }
);

//@route POST /product/add
//@desc Add product
//@access Private
productRoute.post(
  "/add",
  // passport.authenticate("jwt", { session: false}),
  (req, res) => {
    const json = req.body;
    productCrud.add(json, res);
  }
);

//@route DELETE /product/delete
//@desc delete product
//@access Private
productRoute.delete(
  "/delete",
  // passport.authenticate("jwt", { session: false}),
  (req, res) => {
    const json = req.body;
    productCrud.delete(json, res);
  }
);

//@route PUT /product/update
//@desc update product
//@access Private
productRoute.put(
  "/update",
  // passport.authenticate("jwt", { session: false}),
  (req, res) => {
    const json = req.body;
    productCrud.update(json, res);
  }
);

module.exports = productRoute;
