const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
router.get("/", ctrl.getAllContacts);
router.post("/", validateBody(schemas.addSchema), ctrl.addAContact);
router.get("/:id", ctrl.getContactById);
router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContactById);
router.delete("/:id", ctrl.removeContactById);

module.exports = router;
