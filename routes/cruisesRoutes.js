const router = require("express").Router();

const cruisesController = require("../controllers/cruisesController");

router.route("/request").get(cruisesController.getCruisesByRequest);

module.exports = router;
