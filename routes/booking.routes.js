const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.model");
const User = require("../models/user.model");
var mongoose = require("mongoose");

router.post("/api/booking", (req, res, next) => {
  const { user, doctorname, time } = req.body;
  Booking.create({ user, doctorname, time })
    .then((createdBooking) => {
      return User.findByIdAndUpdate(
        user._id,
        {
          push: { bookings: { createdBooking } },
        },
        { new: true }
      );
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/api/bookings/:userId", async (req, res, next) => {
  const { userId } = req.params;
  let username = mongoose.Types.ObjectId(userId);
  try {
    const bookings = await Booking.find({
      user: username,
    });
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
