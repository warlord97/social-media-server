const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

dotenv.config("./.env");

//configration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

//middleware
app.use(express.json({limit: "50mb"}));
app.use(morgan("common"));
app.use(cookieParser());

// let origin = "http://localhost:3000";
// console.log("here env is ", process.env.NODE_ENV);
// console.log('the origin url is ',origin)
// if (process.env.NODE_ENV == 'production') {
//   console.log('I am inside production');
//   origin = process.env.CORS_ORIGIN;
//   console.log('origin url is ',origin);
// }

app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("server working fine");
});

const port = process.env.PORT || 4001;

dbConnect();

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
