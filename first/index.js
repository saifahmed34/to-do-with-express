const express = require("express");
const routetask = require("./routes/tasks");

const app = express();
const Port = 3000;



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
