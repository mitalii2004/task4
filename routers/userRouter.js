const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.post("/insert", controllers.userController.insert);
router.get("/findRecord", controllers.userController.findRecord);
router.post("/insertpost", controllers.userController.insertPost);
router.get('/findPostByUser', controllers.userController.findPostByUser);
router.get('/findUserByPost', controllers.userController.findUserByPost);


module.exports = router;