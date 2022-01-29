const express = require("express");
const setupRoutes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const app = express();
setupRoutes(app);
app.use(express.json());


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
 
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});