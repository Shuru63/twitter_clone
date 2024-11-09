const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true }));// to parse form data(urlencoded)
app.use(cookieParser())

const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const postRoutes = require("./routes/post.route.js");
const notificationRoutes = require("./routes/notification.route.js");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

module.exports = app;