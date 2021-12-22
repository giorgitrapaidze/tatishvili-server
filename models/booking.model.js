const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    doctorname: { type: String },
    time: { type: String },
    reserved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("Booking", bookingSchema);
