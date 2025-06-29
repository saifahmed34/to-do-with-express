require("dotenv").config()
const express = require("express");
const routetask = require("./routes/tasks");
const mongouse = require("mongoose")


const app = express();
const Port = 3000;


//add datebase
mongouse.connect(process.env.MongoUrl).then(()=>
console.log("connected successfully")

).catch(err=>console.error("failed"))

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", routetask);

// Start server
app.listen(Port, () => {
  try {
    console.log(`Server Started at port ${Port}`);
  } catch (err) {
    console.log(err);
  }
});
