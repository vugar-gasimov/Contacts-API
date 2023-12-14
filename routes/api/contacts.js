const express = require("express");
const Joi = require("joi");
const contacts = require("../../models/contacts");
const router = express.Router();
const { CustomError } = require("../../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.getAllContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw CustomError(400, error.message);
    }
    const result = await contacts.addAContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    if (!result) {
      throw CustomError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw CustomError(404, error.message);
    }
    const { id } = req.params;
    const result = await contacts.updateContactById(id, req.body);
    if (!result) {
      throw CustomError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContactById(id);
    if (!result) {
      throw CustomError(404, "Not Found");
    }
    res.json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
