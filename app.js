const express = require("express");
const setupRoutes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
setupRoutes(app);


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
 
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});