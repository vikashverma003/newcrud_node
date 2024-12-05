const mongoose = require("mongoose");

const NuserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Npost,
    }],
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nuser", NuserSchema);
