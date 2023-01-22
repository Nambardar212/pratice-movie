const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.get('/',(req, res) => {
  app.use(express.static(path.resolve(__dirname,'movie-app-UI','build')))
  res.sendFile(path.resolve(__dirname,'movie-app-UI','build','index.html'))
})


app.listen(5000, () => {
  console.log("server started on port 5000");
});  