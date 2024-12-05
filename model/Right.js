const mongoose = require("mongoose");

const RightSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }],
    name: {
      type: String,
      max: 500,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Right", RightSchema);
