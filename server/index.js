const express = require("express");
const path = require("path");

const {
  serveGundumMulti,
  serveGundum,
  updateGundum,
  createGundum,
  del,
} = require("./controllers/gundumControllers.js");

const app = express();
const pathToFrontendDist = path.join(__dirname, "../Frontend/app/dist");

// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - time`);
  next(); // Passes the request to the next middleware/controller
};

// Register the logRoutes middleware globally to log all requests
const serveStatic = express.static(pathToFrontendDist);
const parseJSON = express.json();

app.use(logRoutes);
app.use(serveStatic);
app.use(parseJSON);

// Other endpoints and controllers

app.get("/api/gundum", serveGundumMulti);
app.get("/api/gundum/:id", serveGundum);
app.post("/api/gundum", createGundum);
app.patch("/api/gundum/:id", updateGundum);
app.delete("/api/gundum/:id", del);

app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(pathToFrontendDist);
});

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
