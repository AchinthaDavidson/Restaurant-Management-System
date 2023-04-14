require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/auth.route");
const userRoutes = require("./src/routes/user.route");
const { MONGO_URL, PORT } = require("./src/configs/server");
const bcrypt = require("bcrypt");
const passport = require("passport");

require("./src/middlewares/passport.middleware");

const app = express();
const port = PORT;

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "*",
  })
);

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to mongoDB
main().catch((err) => console.log(err));
async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URL);
}

app.use("/auth", authRoutes);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoutes);

app.listen(port, () => {
  console.log(`server started in port ${port}`);
});
