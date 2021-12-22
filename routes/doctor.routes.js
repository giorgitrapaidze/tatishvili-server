const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor.model");
const Booking = require("../models/booking.model");
const User = require("../models/user.model");
var mongoose = require("mongoose");

router.get("/api/doctors", async (req, res, next) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    next(error);
  }
});

router.get("/api/doctors/:category", async (req, res, next) => {
  const category = req.params.category;
  try {
    const doctors = await Doctor.find();
    const filtered = await doctors.filter((doctor) => {
      return doctor.category.toLowerCase().replace(/ /g, "") == category;
    });
    res.status(200).json(filtered);
  } catch (error) {
    next(error);
  }
});

router.get("/api/doctor/:doctorId", (req, res, next) => {
  const { doctorId } = req.params;

  Doctor.findById(doctorId)
    .then((doctor) => res.status(200).json(doctor))
    .catch((error) => res.json(error));
});

// routes/project.routes.js

//  POST /api/projects  -  Creates a new project
router.post("/api/doctors", (req, res, next) => {
  const { name, image, category } = req.body;

  Doctor.create({ name, image, category })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
