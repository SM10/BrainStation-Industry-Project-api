const router = require("express").Router();
const trafficController = require("../controllers/trafficController");

router.route("/").post(trafficController.addToTrafficTable);

module.exports = router;
