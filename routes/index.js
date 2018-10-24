const router = require("express").Router();
const authRoutes = require("./auth");
const contactRoutes = require("./contact");
const kpisRoutes = require("./kpis");

const productRoutes = require("./products");
const bscRoutes = require("./bsc");
const taskRoutes = require("./task");
const usersDataRoutes = require("./users");
// const fileInputRoutes = require("./fileInput");

// API Routes
router.use("/api", authRoutes);
router.use("/api", contactRoutes);
router.use("/api", kpisRoutes);
router.use("/api", productRoutes);
router.use("/api", bscRoutes);
router.use("/api", taskRoutes);
router.use("/api", usersDataRoutes);
// router.use("api", fileInputRoutes);

//// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;