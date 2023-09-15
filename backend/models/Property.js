const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 6,
    },
    type: {
      type: String,
      enum: ["beach", "city", "country"],
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 50,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sqmeters: {
      type: Number,
      required: true,
      min: 15,
    },
    continent: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
      min: 2,
    },
    bookmarkedUsers: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);