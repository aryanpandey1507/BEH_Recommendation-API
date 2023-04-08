const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require('./api/routes/userRoute');
const blogRoute = require('./api/routes/blogRoute');
const commentRoute = require('./api/routes/commentRoute');


const connectDB=require('./utils/mongoDB');

const app = express();
const PORT = 8080;

// parse application/json
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.status(200).send("API is live !");
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);

connectDB();



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});