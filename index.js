const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const cruisesRoute = require("./routes/cruisesRoutes");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/cruises", cruisesRoute);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
