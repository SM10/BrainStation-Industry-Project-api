const router = require("express").Router();

const cruisesController = require("../controllers/cruisesController");

router.route("/request").post(cruisesController.getCruisesByRequest);

module.exports = router;
