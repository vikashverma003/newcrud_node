const mongoose = require("mongoose");

const NpostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
     
    },
    content: {
      type: String,
      required: true,
    },
    author: [{
       type: mongoose.Schema.Types.ObjectId,
      ref: Nuser,
    }],
   comment: [{
     type: mongoose.Schema.Types.ObjectId,
      ref: Ncomment,
    }],
  },
  { timestamps: true }
  );

module.exports = mongoose.model("Npost", NpostSchema);
