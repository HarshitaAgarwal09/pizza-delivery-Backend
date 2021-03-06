const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const googleSetup = require("./utils/googlepassport");
app.use(express.static("public"));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["thisismagiccode"]
  })
);
app.use(passport.initialize());
app.use(require("./utils/cors"));

app.use("/user", require("./routes/api/reglogin"));
app.use("/auth", require("./routes/api/auth"));
app.use("/product", require("./routes/api/product"));
app.use("/feedback", require("./routes/api/feedback"));
app.use("/cart", require("./routes/api/cart"));
app.use((req, res) => {
  res.send("you have typed something wrong");
});

var PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`server start at ${PORT}`);
  }
});
