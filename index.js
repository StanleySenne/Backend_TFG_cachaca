const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Public folder for images
app.use(express.static("public"));

// Routes

const UserRoutes = require("./routes/UserRoutes");
const MarcaRoutes = require("./routes/MarcaRoutes");

app.use("/users", UserRoutes);
app.use("/marcas", MarcaRoutes);

app.listen(5000);
