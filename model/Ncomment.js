const mongoose = require("mongoose");

const NcommentSchema = new mongoose.Schema({
    text: {
      type: String,
      require: true,
    },
    
    author: [{
       type: mongoose.Schema.Types.ObjectId,
      ref: Nuser,
    }],

  },
  { timestamps: true }
);

module.exports = mongoose.model("Ncomment", NcommentSchema);
