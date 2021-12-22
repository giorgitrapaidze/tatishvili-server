const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    default: "https://drgsearch.com/wp-content/uploads/2020/01/no-photo.png",
  },
  category: { type: String, required: true },
  icon: { type: String },
  bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
});

module.exports = model("Doctor", doctorSchema);
