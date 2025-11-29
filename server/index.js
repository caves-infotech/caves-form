require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const mongoConnect = require("./utils/mongoConnect");
const cloudinaryConnect = require("./utils/cloudinaryConnect");
const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const formRoute = require("./routes/form.route");
const { authenticateUser } = require("./middleware/auth.middleware");
const enquiryRoutes = require("./routes/enquiry.route");

const app = express();

mongoConnect();
cloudinaryConnect();
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const allowedOrigins = ["http://localhost:3000", "https://udcprs.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
    credentials: true,
  })
);

app.use(authenticateUser);

app.get("/", (req, res) => {
  res.json({ home: "server is working" });
});
app.use("/form", formRoute);
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/api", enquiryRoutes);

//console.log("adminRoute",adminRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
