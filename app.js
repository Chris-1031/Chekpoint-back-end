const express = require("express");
const setupRoutes = require("./routes");
require("dotenv").config();
const cors = require('cors');


// const PORT = process.env.PORT || 5001;
const { SERVER_PORT } = process.env;

const app = express();
app.use(express.json());


app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
 
  setupRoutes(app);

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});