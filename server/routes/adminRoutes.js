const router = require("express").Router();
const adminController = require("../controllers/admin");
const { authenticateUser } = require("../utils/jwtToken");

router.post("/addAdmin",adminController.addAdminUser);
router.post("/loginAdmin",adminController.loginAdminUser);

//protectedRoute
router.get("/getAdmin",authenticateUser,adminController.getAdminUser);
router.get("/logoutAdmin",authenticateUser,adminController.logoutAdminUser);

module.exports = router;