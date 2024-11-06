const express = require("express");
const apicache=require("apicache");
const workoutController = require("../../Controllers/workoutController");
const recordController=require("../../Controllers/recordsController");
const getRecordForWorkout=require("../../Database/Record");
const router = express.Router();
const cache=apicache.middleware;


router.get("/",cache("2 minutes"),workoutController.getAllWorkouts);
router.get("/", workoutController.getAllWorkouts);
router.get("/:workoutId/records",recordController.getRecordForWorkout);
router.get("/", workoutController.getOneWorkout);
router.post("/", workoutController.createNewWorkout);
router.patch("/", workoutController.updateOneWorkout);
router.delete("/", workoutController.deleteOneWorkout);
//we will hook up this into index.js main file in the route folder
module.exports = router;